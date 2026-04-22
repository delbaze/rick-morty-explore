import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    email: null,
  },
  reducers: {
    setInfos: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
    },
  },
});

export const { logout, setInfos } = authSlice.actions;
export default authSlice.reducer;
