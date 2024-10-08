import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteList } from "../store/list/listSlice";
import { toggleEditListModal } from "../store/modal/modalSlice";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "./ui/Dropdown";
import { EllipsisVertical } from "lucide-react";
import EditListModal from "./EditListModal";
import { RootState } from "../store/store";

const ListMenuDropdown = ({ list }) => {
  const dispatch = useDispatch();

  const isEditListModalOpen = useSelector(
    (state: RootState) => state.editModal.isOpen
  );

  console.log(isEditListModalOpen);

  const handleDeleteList = () => {
    if (window.confirm("Are you sure you want to delete this list?")) {
      dispatch(deleteList(list.id));
    }
  };

  const handleEditListModalOpen = () => {
    dispatch(toggleEditListModal());
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <EllipsisVertical className="w-4 h-4 text-gray-500 hover:text-[#5d87ff] align-middle" />
        </DropdownTrigger>
        <DropdownContent className="w-24">
          <DropdownItem>
            <EditListModal list={list} />
          </DropdownItem>
          <DropdownItem onClick={handleDeleteList}>Delete</DropdownItem>
          <DropdownItem onClick={() => console.log("Clear all clicked")}>
            Clear All
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
      {/* {isEditListModalOpen && <EditListModal list={list} />} */}
    </div>
  );
};

export default ListMenuDropdown;
