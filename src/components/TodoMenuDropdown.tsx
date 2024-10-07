import React from "react";
import { useDispatch } from "react-redux";

import { deleteTodo } from "../store/todo/todoSlice";
import { editList, deleteList } from "../store/list/listSlice";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "./ui/Dropdown";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";

const TodoMenuDropdown = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger className="hover:bg-blue-50 rounded-full p-2">
          <EllipsisVertical className="w-4 h-4 text-gray-500 hover:text-[#5d87ff]" />
        </DropdownTrigger>
        <DropdownContent className="w-24">
          <DropdownItem onClick={() => console.log("Edit clicked")}>
            <div className="flex items-center gap-2">
              <Pencil className="w-4 h-4" />
              <span>Edit</span>
            </div>
          </DropdownItem>
          <DropdownItem onClick={handleDeleteTodo}>
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </div>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default TodoMenuDropdown;
