import React from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";

const Chat = () => {
  return (
    <>
      <div className="h-screen flex overflow-hidden">
        {/* Sidebar for contacts */}
        <ChatSidebar />
        {/* Main Chat Window */}
        <ChatWindow />
      </div>
    </>
  );
};

export default Chat;
