import React from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";
import ChatMediaPanel from "../components/chat/ChatMediaPanel";

const Chat = () => {
  return (
    <>
      <div className="h-screen flex overflow-hidden">
        {/* Sidebar for contacts */}
        <ChatSidebar />
        {/* Main Chat Window */}
        <ChatWindow />
        {/* Media and Attachments */}
        <ChatMediaPanel />
      </div>
    </>
  );
};

export default Chat;
