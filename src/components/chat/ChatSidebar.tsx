import { Search } from "lucide-react";
import React from "react";

const contacts = [
  {
    name: "James Johnson",
    avatar: "https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg",
    message: "Noeko zisu...",
    time: "13 minutes",
  },
  {
    name: "Maria Hernandez",
    avatar: "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
    message: "Pona ovru...",
    time: "9 minute",
  },
  {
    name: "David Smith",
    avatar: "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
    message: "Noeko zisu...",
    time: "14 minutes",
  },
  {
    name: "Maria Rodriguez",
    avatar: "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
    message: "Pona ovru...",
    time: "9 minute",
  },
  {
    name: "Robert Smith",
    avatar: "https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg",
    message: "Noeko zisu...",
    time: "6 minutes",
  },
  {
    name: "Joseph Sarah",
    avatar: "https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg",
    message: "Pona ovru...",
    time: "10 minute",
  },
  {
    name: "Thomas Smith",
    avatar: "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
    message: "Noeko zisu...",
    time: "15 minutes",
  },
  {
    name: "David Elizabeth",
    avatar: "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
    message: "Pona ovru...",
    time: "4 minute",
  },
  {
    name: "Charles Martha",
    avatar: "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
    message: "Noeko zisu...",
    time: "9 minutes",
  },
  {
    name: "Samuel Eliza",
    avatar: "https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg",
    message: "Pona ovru...",
    time: "3 minute",
  },
];

const ChatSidebar = () => {
  return (
    <>
      <style>
        {`
          /* Initially hide the scrollbar */
          ::-webkit-scrollbar {
            width: 0;
            background: transparent;
          }

          /* Show the scrollbar on hover or scroll */
          .scrollbar:hover::-webkit-scrollbar {
            width: 6px;
            
          }

          .scrollbar::-webkit-scrollbar-thumb {
            background-color: #f1f1f1;
            border-radius: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .scrollbar:hover::-webkit-scrollbar-thumb,
          .scrollbar:active::-webkit-scrollbar-thumb {
            opacity: 1;
          }

          .scrollbar::-webkit-scrollbar-track {
            background-color: #ffffff;
          }
        `}
      </style>

      <div className="w-1/4 border-r border-gray-200 p-4 bg-white h-screen flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="	https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg"
            alt="Image"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="font-medium">John Deo</h2>
            <p className="text-sm text-gray-500">Marketing Manager</p>
          </div>
        </div>

        {/* Search Field */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search contacts"
            className="w-full text-sm text-gray-700 px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        {/* Contact List */}
        <h2 className="text-lg font-semibold mb-4">Recent Charts</h2>
        <div className="flex-1 overflow-y-auto space-y-4 scrollbar">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="p-2 flex items-center hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium"> {contact.name} </p>
                  <p className="text-xs text-gray-400">{contact.time}</p>
                </div>
                <p className="text-sm text-gray-500"> {contact.message} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
