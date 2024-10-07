import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Plus } from "lucide-react";

import { addTodo } from "../store/todo/todoSlice";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  useSelect,
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

const AddTodo = ({ listId }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [property, setProperty] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handlePropertySelect = (value: string) => {
    setProperty(value);
  };

  const handleAddTodo = () => {
    if (title.trim() && text.trim()) {
      dispatch(
        addTodo({
          listId,
          title,
          text,
          imageURL,
          property,
          date,
        })
      );
      setTitle("");
      setText("");
      setImageURL("");
      setProperty("");
      setDate("");
    }
  };

  return (
    <Modal>
      <ModalTrigger>
        <Plus className="w-4 h-4 text-gray-500 hover:text-[#5d87ff]" />
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>
          <ModalTitle className="text-xl font-semibold">Add List</ModalTitle>
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
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select Task Property" />
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
            onClick={handleAddTodo}
            disabled={
              title && text && imageURL && property && imageURL ? false : true
            }
          >
            Add Todo
          </ModalSubmit>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTodo;
