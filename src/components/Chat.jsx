import React, { useState } from "react";

const Chat = ({ post, onClose }) => {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { sender: "You", text: messageInput }]);
      setMessageInput(""); // Clear the input field
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-80 bg-white shadow-lg border p-4 rounded-t-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="font-bold">Chat with {post.email}</h3>
        <button
          onClick={onClose}
          className="text-red-500 font-bold hover:text-red-700"
        >
          Close
        </button>
      </div>
      <div className="h-64 overflow-y-auto border p-2 mb-4">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
