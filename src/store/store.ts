import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list/listSlice";
import todoReducer from "./todo/todoSlice";
import userReducer from "./user/userSlice";
import chatReducer from "./chat/chatSlice";

export const store = configureStore({
  reducer: {
    lists: listReducer,
    todos: todoReducer,
    user: userReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
