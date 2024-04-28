"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatPage({ params }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [messages, setMessages] = useState([
    {
      text: "Hi there!",
      from: "Bot",
    },
    {
      text: "Hello bot!",
      from: "User",
    },
  ]);
  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos",
  //       {
  //         method: "GET",
  //         params: {
  //           _page: pageNumber,
  //           _limit: 10,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setMessages(data);
  //     console.log(data, "data");
  //   };

  //   fetchMessages();
  // }, [pageNumber]);
  const addMessage = (text, from) => {
    setMessages([...messages, { text, from }]);
  };
  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <div className="w-full bg-[#fcffff]rounded-3xl ">
        <div className="w-full bg-[#36B8B8] rounded-3xl pt-20 pb-4">
          <div className="pl-2"> {params.slug}</div>
        </div>
      </div>
      <div className="chat-page">
        <div className="messages">
          {messages.map((msg) => (
            <div className={`message ${msg.from}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addMessage(e.target.value, "User");
              e.target.value = "";
            }
          }}
        />
      </div>
      {/* {messages.map((message) => (
        <div>{message.title}</div>
      ))} */}
      {/* <button onClick={handleLoadMore}>Load more</button> */}
    </div>
  );
}
