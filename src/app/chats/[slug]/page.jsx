"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import { document } from "postcss";
import useEffectOnce from "@/hooks/useEffectOnce";
export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const addMessage = async () => {
    const title = inputRef.current.value;
    if (!title.trim()) {
      return;
    }
    const message = {
      id: Math.round(Math.random() * 10000),
      title,

      sender: "user",
      self: true,
    };

    setMessages((prev) => [message, ...prev]);
    inputRef.current.value = "";
    inputScroll();
  };
  const fetchMessages = useCallback(async () => {
    setLoading(true);

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _page: page,
          _limit: 10,
        },
      }
    );

    const newMessages = data
      .map((item) => ({ ...item, self: false }))
      .reverse();
    setMessages((prev) => [...prev, ...newMessages]);

    setLoading(false);
  }, [page]);

  const inputScroll = () => {
    messagesRef.current?.scrollTo(0, 0);
  };
  // const scrollToBottom = () => {
  //   window.scrollTo(0, document.body?.getBoundingClientRect().height);
  // };

  useEffectOnce(fetchMessages, [page]);

  const handleScroll = ({ target }) => {
    const scrollDiff = target.clientHeight - target.scrollHeight;
    console.log(scrollDiff);
    if (!loading && scrollDiff === target.scrollTop) {
      setPage((prev) => prev + 1);
    }
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);
  return (
    <>
      <div className="h-screen flex flex-col flex-1 py-2 bg-gray-200 relative ">
        <div className="flex items-center mb-2 top-0 mx-2">
          <div className="bg-teal-500 rounded-3xl h-14 w-full">
            <div className="p-4 font-medium"> {params.slug}</div>
          </div>
        </div>
        {loading && (
          <div className="absolute top-20 left-0 right-0 flex justify-center z-10 bg-gray-200">
            <Loader />
          </div>
        )}
        <div
          className="  flex rounded-lg p-2 overflow-auto mb-2 max-w-sm flex-col-reverse grow px-4 "
          ref={messagesRef}
          onScroll={handleScroll}
        >
          {messages.map((message) => (
            <div
              className={`mt-4 rounded-3xl p-2 text-sm", ${
                message.self
                  ? "items-start bg-red-600"
                  : "items-end bg-[#B5E2E2]"
              }`}
              key={message.id}
            >
              {message.title}
            </div>
          ))}
        </div>

        <div className="bg-gray-100 px-4 py-2 sticky bottom-0">
          <div className="flex items-center ">
            <input
              className="w-full border rounded-full py-2 px-4 mr-2"
              type="text"
              placeholder="Message"
              ref={inputRef}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  addMessage();

                  e.target.value = "";
                }
              }}
            />
            <button
              onClick={() => addMessage()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
