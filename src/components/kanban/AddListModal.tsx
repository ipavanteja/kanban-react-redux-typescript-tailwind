import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addList } from "../../store/list/listSlice";

import Button from "../ui/Button";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalClose,
  ModalSubmit,
} from "../ui/Modal";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

const AddListModal = () => {
  const dispatch = useDispatch();

  const [listName, setListName] = useState("");

  const handleAddList = () => {
    if (listName.trim()) {
      dispatch(addList(listName));
      setListName("");
    }
  };

  return (
    <div>
      <Modal>
        <ModalTrigger>
          <Button>Add List</Button>
        </ModalTrigger>

        <ModalContent>
          <ModalHeader>
            <ModalTitle className="text-xl font-semibold">Add List</ModalTitle>
          </ModalHeader>
          <div>
            <Label className="text-md mt-6 mb-1">List Name</Label>
            <Input
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          </div>
          <ModalFooter>
            <ModalClose>Close</ModalClose>
            <ModalSubmit
              onClick={handleAddList}
              disabled={listName ? false : true}
            >
              Add List
            </ModalSubmit>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddListModal;
