import { Send } from "lucide-react";
import React from "react";

const messages = [
  {
    sender: "James Johnson",
    time: "1 hour ago",
    text: "Ebaevsa maves mudem...",
  },
  {
    sender: "James Johnson",
    time: "30 minutes ago",
    text: "Jetime ki afone...",
  },
  {
    sender: "You",
    time: "Just now",
    text: "Ibobohri emeak jazedjeh luw osla.",
  },
];

const ChatWindow = () => {
  return (
    <div className="w-2/4 flex flex-col justify-between">
      {/* Chat Messages */}
      <div className="flex-grow p-6 space-y-4 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://randomuser.me/api/portraits/men/${
                    index + 1
                  }.jpg`}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full"
                />
                <p className="font-medium"> {message.sender} </p>
              </div>
              <p className="text-xs text-gray-400"> {message.time} </p>
            </div>
            <p className="ml-10 text-gray-700">{message.text}</p>
          </div>
        ))}
      </div>
      {/* Input Bar */}
      <div className="border-t border-gray-200 p-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="text-blue-500 hover:text-blue-600">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
