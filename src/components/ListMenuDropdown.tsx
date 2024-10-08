import React from "react";
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

type ListMenuDropdownProps = {
  list: { id: string; title: string; bgColor?: string; isDefault: boolean };
};

const ListMenuDropdown = ({ list }: ListMenuDropdownProps) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    dispatch(deleteList(list.id));
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
    </div>
  );
};

export default ListMenuDropdown;
