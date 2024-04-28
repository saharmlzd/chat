"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);
  // TODO : pas aval a hame func am bayad async bashe
  const addMessage = async (text, sender) => {
    const message = {
      text,
      sender,
    };
    //create new arrya with pre message and new message
    setMessages((prev) => [...prev, message]);
    console.log(messages, "execution");
    //Waits for the bot response using await.
    const botResponse = await getBotResponse();

    setMessages((prev) => [...prev, botResponse]);
  };
  //TODO:refactor to dynamic answer
  // const getBotResponse = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/photos"
  //   );
  //   return {
  //     text: response.data[0].title,
  //     sender: "Bot",
  //   };

  // };
  const responses = [];

  const getBotResponse = async () => {
    if (responses.length === 0) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      responses.push(...response.data);
    }

    const index = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[index];

    return {
      text: randomResponse.title,
      sender: "Bot",
    };
  };

  return (
    <>
      <div className="w-full  bg-[#fcffff]rounded-3xl h-full">
        <div className="bg-teal-500 rounded-3xl p-8 sticky top-0">
          <div className="pl-2"> {params.slug}</div>
        </div>
        <div className="overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index}>
              {message.sender}: {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 bg-[#fcffff]">
        <input
          className="w-full p-4 border rounded-3xl "
          type="text"
          placeholder="Message"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addMessage(e.target.value, "User");
              e.target.value = "";
            }
          }}
        />
      </div>
    </>
  );
}
