import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { moveTodo } from "../store/todo/todoSlice";
import { RootState } from "../store/store";
import List from "./List";
import AddListModal from "./AddListModal";

const Board = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.lists.lists);
  const todos = useSelector((state: RootState) => state.todos.todos);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch(
      moveTodo({
        todoId: draggableId,
        targetListId: destination.droppableId,
      })
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between px-2 pb-6">
            <h1 className="text-xl text-gray-800 font-semibold">
              Improving Work Processes
            </h1>
            <AddListModal />
          </div>
          <div className="flex gap-5">
            {lists.map((list) => (
              <Droppable key={list.id} droppableId={list.id}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <List
                      list={list}
                      todos={todos.filter((todo) => todo.listId === list.id)}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Board;
