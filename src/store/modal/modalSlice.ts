import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEditListModal: (state) => {
      state.isOpen = true;
    },
    closeEditListModal: (state) => {
      state.isOpen = false;
    },
    toggleEditListModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openEditListModal, closeEditListModal, toggleEditListModal } =
  modalSlice.actions;

export default modalSlice.reducer;
