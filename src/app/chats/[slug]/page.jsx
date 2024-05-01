"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import { document } from "postcss";
export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [inputHandler, setInputHandler] = useState([]);

  const divRef = useRef(null);
  const mRef = useRef(null);
  const addMessage = async (text, sender) => {
    const message = {
      text,
      sender,
    };

    setInputHandler((prev) => [...prev, message]);
    inputScroll();
  };
  const fetchMessages = async (page) => {
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

    setMessages((prev) => [...prev, ...data].reverse());

    setLoading(false);
  };

  const inputScroll = () => {
    divRef.current?.lastElementChild?.scrollIntoView();
  };
  // const scrollToBottom = () => {
  //   window.scrollTo(0, document.body?.getBoundingClientRect().height);
  // };

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="bg-gray-200 flex-1 ">
          <div className="px-4 py-2 ">
            <div className="flex items-center mb-2 sticky top-0">
              <div className="bg-teal-500 rounded-3xl h-14 w-full">
                <div className="p-4 font-medium"> {params.slug}</div>
              </div>
            </div>
            {loading && <Loader />}

            <div
              className=" flex h-full rounded-lg p-2  mb-2 max-w-sm  flex-col-reverse	"
              ref={mRef}
            >
              {messages.map((message, index) => (
                <div
                  className="mt-4 bg-[#B5E2E2]  rounded-3xl p-2 text-sm "
                  key={index}
                >
                  {message.title}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end" ref={divRef}>
              <div>
                {inputHandler.map((message, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white rounded-3xl p-2  mr-2 max-w-sm mt-4"
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-4 py-2 sticky bottom-0">
          <div className="flex items-center ">
            <input
              className="w-full border rounded-full py-2 px-4 mr-2"
              type="text"
              placeholder="Message"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  addMessage(e.target.value, "User");

                  e.target.value = "";
                }
              }}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
