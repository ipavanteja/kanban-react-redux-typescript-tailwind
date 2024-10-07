import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editList } from "../store/list/listSlice";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalClose,
  ModalSubmit,
} from "./ui/Modal";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

const EditListModal = ({ list, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState(list.title);

  const handleEditList = () => {
    if (listName.trim()) {
      dispatch(editList({ id: list.id, title: listName }));
      onClose(); // Close modal after saving
    }
  };

  if (!isOpen) return null; // Only render the modal if it's open

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="text-xl font-semibold">
            Edit Category
          </ModalTitle>
        </ModalHeader>
        <div>
          <Label className="text-md mt-6 mb-1">Category Name</Label>
          <Input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </div>
        <ModalFooter>
          <ModalClose onClick={onClose}>Close</ModalClose>
          <ModalSubmit onClick={handleEditList} disabled={!listName.trim()}>
            Save
          </ModalSubmit>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditListModal;
