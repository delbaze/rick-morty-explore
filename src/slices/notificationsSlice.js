import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: { message: null },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload; // "ex :Maximum 10 favoris autorisés"
    },
    clearNotification: (state) => {
      state.message = null;
    },
  },
});

export const { clearNotification, setNotification } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
