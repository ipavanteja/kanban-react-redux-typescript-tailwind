import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
  id: string;
  title: string;
  isDefault: boolean;
}

interface ListsState {
  lists: ListState[];
}

const initialState: ListsState = {
  lists: [
    { id: "list-1", title: "To Do", isDefault: true },
    { id: "list-2", title: "In Progress", isDefault: false },
    { id: "list-3", title: "Review", isDefault: false },
    { id: "list-4", title: "Done", isDefault: false },
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
