// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  status: string;
  avatar: string;
}

const initialState: UserState = {
  id: "1",
  name: "John Deo",
  status: "online",
  avatar: "path_to_avatar",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.status = action.payload.status;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
