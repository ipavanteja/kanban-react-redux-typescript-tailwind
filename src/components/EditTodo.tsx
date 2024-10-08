import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo } from "../store/todo/todoSlice";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "./ui/Select";

import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalClose,
  ModalSubmit,
} from "./ui/Modal";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

type EditTodoProps = {
  todo: {
    id: string;
    title: string;
    text: string;
    imageURL?: string;
    property: string;
    date: string;
  };
};

const EditTodo = ({ todo }: EditTodoProps) => {
  const [title, setTitle] = useState(todo.title || "");
  const [text, setText] = useState(todo.text || "");
  const [imageURL, setImageURL] = useState(todo.imageURL || "");
  const [property, setProperty] = useState(todo.property || "");
  const [date, setDate] = useState(todo.date || "");

  const dispatch = useDispatch();

  const handlePropertySelect = (value: string) => {
    setProperty(value);
  };

  const handleEditTodo = () => {
    if (title.trim() && text.trim()) {
      dispatch(
        editTodo({
          id: todo.id,
          title,
          text,
          imageURL,
          property,
          date,
        })
      );
    }
  };

  return (
    <Modal>
      <ModalTrigger>
        <p>Edit</p>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>
          <ModalTitle className="text-xl font-semibold">Edit Task</ModalTitle>
        </ModalHeader>
        <div>
          <div className="mt-4">
            <div className="flex items-center space-x-6">
              <div>
                <Label className="mb-1 text-sm">Task Title *</Label>
                <Input
                  className="border p-2 rounded"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <Label className="mb-1 text-sm">Text *</Label>
                <Input
                  className="border p-2 rounded"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label className="mb-1 text-sm">Image URL *</Label>
              <Input
                className="border p-2 rounded"
                type="url"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-6">
              <div>
                <Label className="mb-1 text-sm">Task Property *</Label>
                <Select onSelect={handlePropertySelect}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue
                      value={property}
                      placeholder="Select Task Property"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Task Property</SelectLabel>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="UX Stage">UX Stage</SelectItem>
                      <SelectItem value="Research">Research</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Branding">Branding</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-1 text-sm">Due Date *</Label>
                <Input
                  className="border p-2 rounded"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <ModalFooter>
          <ModalClose>Close</ModalClose>
          <ModalSubmit
            onClick={handleEditTodo}
            disabled={
              title && text && imageURL && property && imageURL ? false : true
            }
          >
            Save Changes
          </ModalSubmit>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTodo;
