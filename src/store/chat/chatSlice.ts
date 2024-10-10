// src/store/slices/chatSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  media?: string;
}

interface ChatState {
  messages: Message[];
  currentChatUserId: string;
}

const initialState: ChatState = {
  messages: [],
  currentChatUserId: "", // selected user to chat with
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setCurrentChatUser: (state, action: PayloadAction<string>) => {
      state.currentChatUserId = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { sendMessage, setCurrentChatUser, setMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
