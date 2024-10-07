import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list/listSlice";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    lists: listReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
