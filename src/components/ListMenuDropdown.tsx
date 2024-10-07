import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteList } from "../store/list/listSlice";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "./ui/Dropdown";
import { EllipsisVertical } from "lucide-react";
import EditListModal from "./EditListModal";

const ListMenuDropdown = ({ list, todos }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteList = () => {
    if (window.confirm("Are you sure you want to delete this list?")) {
      dispatch(deleteList(list.id));
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <EllipsisVertical className="w-4 h-4 text-gray-500 hover:text-[#5d87ff] align-middle" />
        </DropdownTrigger>
        <DropdownContent className="w-24">
          <DropdownItem onClick={handleModalOpen}>Edit</DropdownItem>
          <DropdownItem onClick={handleDeleteList}>Delete</DropdownItem>
          <DropdownItem onClick={() => console.log("Clear all clicked")}>
            Clear All
          </DropdownItem>
        </DropdownContent>
      </Dropdown>

      {/* Pass isOpen and onClose to control the modal */}
      <EditListModal
        list={list}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default ListMenuDropdown;
