import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoState = {
  id: string;
  listId: string;
  title: string;
  text: string;
  imageURL: string;
  property: string;
  date: string;
};

type TodosState = {
  todos: TodoState[];
};

const initialState: TodosState = {
  todos: [
    {
      id: "todo-1",
      listId: "list-1",
      title: "Todo 1",
      text: "This is the first todo",
      imageURL: "",
      property: "Low",
      date: "2024-10-05",
    },
    {
      id: "todo-2",
      listId: "list-1",
      title: "Todo 2",
      text: "This is the second todo",
      imageURL: "",
      property: "Medium",
      date: "2024-10-06",
    },
    {
      id: "todo-3",
      listId: "list-1",
      title: "Todo 3",
      text: "This is the third todo",
      imageURL: "",
      property: "High",
      date: "2024-10-07",
    },
    {
      id: "todo-4",
      listId: "list-2",
      title: "In Progress 1",
      text: "First in progress task",
      imageURL: "",
      property: "Medium",
      date: "2024-10-08",
    },
    {
      id: "todo-5",
      listId: "list-2",
      title: "In Progress 2",
      text: "Second in progress task",
      imageURL: "",
      property: "Low",
      date: "2024-10-09",
    },
    {
      id: "todo-6",
      listId: "list-2",
      title: "In Progress 3",
      text: "Third in progress task",
      imageURL: "",
      property: "High",
      date: "2024-10-10",
    },
    {
      id: "todo-7",
      listId: "list-3",
      title: "Review 1",
      text: "First review task",
      imageURL: "",
      property: "Low",
      date: "2024-10-11",
    },
    {
      id: "todo-8",
      listId: "list-3",
      title: "Review 2",
      text: "Second review task",
      imageURL: "",
      property: "High",
      date: "2024-10-12",
    },
    {
      id: "todo-9",
      listId: "list-3",
      title: "Review 3",
      text: "Third review task",
      imageURL: "",
      property: "Medium",
      date: "2024-10-13",
    },
    {
      id: "todo-10",
      listId: "list-4",
      title: "Done 1",
      text: "First done task",
      imageURL: "",
      property: "High",
      date: "2024-10-14",
    },
    {
      id: "todo-11",
      listId: "list-4",
      title: "Done 2",
      text: "Second done task",
      imageURL: "",
      property: "Medium",
      date: "2024-10-15",
    },
    {
      id: "todo-12",
      listId: "list-4",
      title: "Done 3",
      text: "Third done task",
      imageURL: "",
      property: "Low",
      date: "2024-10-16",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        listId: string;
        title: string;
        text: string;
        imageURL: string;
        property: string;
        date: string;
      }>
    ) => {
      const newTodo = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.todos.push(newTodo);
    },
    editTodo: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        text: string;
        imageURL: string;
        property: string;
        date: string;
      }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.text = action.payload.text;
        todo.imageURL = action.payload.imageURL;
        todo.property = action.payload.property;
        todo.date = action.payload.date;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    moveTodo: (
      state,
      action: PayloadAction<{ todoId: string; targetListId: string }>
    ) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload.todoId
      );
      if (todo) {
        todo.listId = action.payload.targetListId;
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, moveTodo } = todoSlice.actions;
export default todoSlice.reducer;
