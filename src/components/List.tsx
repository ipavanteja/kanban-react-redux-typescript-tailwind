import React from "react";

import { Draggable, DraggableProvided } from "react-beautiful-dnd";

import AddTodo from "./AddTodo";
import Todo from "./Todo";
import ListMenuDropdown from "./ListMenuDropdown";
import { TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/Tooltip";

type TodoType = {
  id: string;
  listId: string;
  title: string;
  text: string;
  imageURL: string;
  property: string;
  date: string;
};

type ListProps = {
  list: {
    id: string;
    title: string;
    bgColor?: string;
    isDefault: boolean;
  };
  todos: TodoType[];
};

const List = ({ list, todos }: ListProps) => {
  return (
    <div
      className="w-64 p-4 rounded-lg"
      style={{ backgroundColor: list.bgColor }}
    >
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
                <ListMenuDropdown list={list} />
                <TooltipContent position="bottom">Menu</TooltipContent>
              </TooltipTrigger>
            </TooltipProvider>
          }
        </div>
      </div>

      {todos &&
        todos.map((todo, index: number) => (
          <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {(provided: DraggableProvided) => (
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
