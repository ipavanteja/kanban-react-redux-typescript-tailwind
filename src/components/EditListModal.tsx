import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { editList } from "../store/list/listSlice";
import { toggleEditListModal } from "../store/modal/modalSlice";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalClose,
  ModalSubmit,
  ModalTrigger,
} from "./ui/Modal";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import Button from "./ui/Button";

const EditListModal = ({ list }) => {
  const dispatch = useDispatch();
  const isEditListModalOpen = useSelector(
    (state: RootState) => state.editModal.isOpen
  );
  const [listName, setListName] = useState(list.title);

  const handleEditList = () => {
    if (listName.trim()) {
      dispatch(editList({ id: list.id, title: listName }));
      dispatch(toggleEditListModal());
    }
  };

  const onClose = () => {
    dispatch(toggleEditListModal());
  };

  return (
    <div>
      <Modal>
        <ModalTrigger>
          <p>Edit</p>
        </ModalTrigger>
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
    </div>
  );
};

export default EditListModal;
