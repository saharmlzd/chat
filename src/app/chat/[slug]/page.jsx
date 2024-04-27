"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatPage({ params }) {
  const [messages, setMessages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "GET",
          params: {
            _page: pageNumber,
            _limit: 10,
          },
        }
      );
      const data = await response.json();
      setMessages(data);
      console.log(data, "data");
    };

    fetchMessages();
  }, [pageNumber]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      {/* {messages.map((message) => (
        <div>{message.title}</div>
      ))} */}
      {params.slug}
      {/* <button onClick={handleLoadMore}>Load more</button> */}
    </div>
  );
}
