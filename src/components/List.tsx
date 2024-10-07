import React from "react";

import { Draggable } from "react-beautiful-dnd";

import AddTodo from "./AddTodo";
import Todo from "./Todo";
import ListMenuDropdown from "./ListMenuDropdown";
import { TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/Tooltip";

const List = ({ list, todos }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">{list.title}</h2>
        <div className="flex items-center gap-4 justify-center">
          {list.isDefault && (
            <TooltipProvider>
              <TooltipTrigger>
                <AddTodo listId={list.id} />
                <TooltipContent position="bottom">Add Task</TooltipContent>
              </TooltipTrigger>
            </TooltipProvider>
          )}
          {
            <TooltipProvider>
              <TooltipTrigger>
                <ListMenuDropdown list={list} todos={todos} />
                <TooltipContent position="bottom">Menu</TooltipContent>
              </TooltipTrigger>
            </TooltipProvider>
          }
        </div>
      </div>

      {todos &&
        todos.map((todo, index) => (
          <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="mb-2"
              >
                <Todo todo={todo} />
              </div>
            )}
          </Draggable>
        ))}
    </div>
  );
};

export default List;
