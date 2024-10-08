import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ListState = {
  id: string;
  title: string;
  bgColor?: string;
  isDefault: boolean;
};

type ListsState = {
  lists: ListState[];
};

const initialState: ListsState = {
  lists: [
    { id: "list-1", title: "To Do", bgColor: "#ecf2ff", isDefault: true },
    {
      id: "list-2",
      title: "In Progress",
      bgColor: "#e8f7ff",
      isDefault: false,
    },
    { id: "list-3", title: "Review", bgColor: "#fef5e5", isDefault: false },
    { id: "list-4", title: "Done", bgColor: "#e6fffa", isDefault: false },
  ],
};

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newList = {
        id: Date.now().toString(),
        title: action.payload,
        isDefault: false,
      };
      state.lists.push(newList);
    },
    editList: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const list = state.lists.find((list) => list.id === action.payload.id);
      if (list) {
        list.title = action.payload.title;
      }
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, editList, deleteList } = listSlice.actions;
export default listSlice.reducer;
