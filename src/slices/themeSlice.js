import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state === "light" ? "dark" : "light";
    },
    set: (state, action) => {
      // {payload: "pink"}
      return action.payload;
    },
  },
  
});

const { actions, reducer } = themeSlice;

export const { set, toggleTheme } = actions;
export default reducer;
