"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import "@/styles/loader.css";
export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [inputHandler, setInputHandler] = useState([]);

  const divRef = useRef(null);
  // const addMessage = async (text, sender) => {
  //   const message = {
  //     text,
  //     sender,
  //   };

  //   setInputHandler((prev) => [...prev, message]);
  //   scrollToBottom();
  // };
  const scrollToBottom = () => {
    divRef.current?.lastElementChild?.scrollIntoView();
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

    setMessages((prev) => [...data, ...prev]);

    setLoading(false);
  };

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
  return (
    <>
      <div className="w-full bg-[#fcffff] rounded-3xl h-full">
        <div className="bg-teal-500 rounded-3xl h-10 sticky top-0">
          <div className="pl-2"> {params.slug}</div>
        </div>
        {loading && <Loader />}
        <div>
          {messages.map((message, index) => (
            <div className="mt-4 bg-[#B5E2E2] rounded-3xl" key={index}>
              {message.title}
            </div>
          ))}
        </div>

        {/* <div ref={divRef}>
          {inputHandler.map((message, index) => (
            <div key={index}>{message.text}</div>
          ))}
        </div> */}
        {/* <div className="sticky bottom-0 ">
          <input
            className="w-full p-4 border rounded-3xl"
            type="text"
            placeholder="Message"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                addMessage(e.target.value, "User");
                e.target.value = "";
              }
            }}
          />
        </div> */}
      </div>
    </>
  );
}
