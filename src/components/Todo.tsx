import React from "react";

import { CalendarCheck } from "lucide-react";
import TodoMenuDropdown from "./TodoMenuDropdown";

const Todo = ({ todo }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg cursor-pointer">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{todo.title}</h3>
        <TodoMenuDropdown todo={todo} />
      </div>
      {todo.imageURL && (
        <img
          className="mt-2 w-full h-auto"
          src={todo.imageURL}
          alt={todo.title}
        />
      )}
      <p className="text-gray-500 py-2">{todo.text}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          <CalendarCheck className="w-4 h-4 text-gray-700" />
          {todo.date}
        </p>
        <p className="text-sm text-gray-600">{todo.property}</p>
      </div>
    </div>
  );
};

export default Todo;
