import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// const initialState = () => {
//   const f = localStorage.getItem("favorites");
//   return f ? JSON.parse(f) : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        // localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      //   const newState = state.filter((f) => f !== action.payload);
      //   const index = state.indexOf(action.payload);
      //   state.splice(index, 1);
      //   localStorage.setItem("favorites", JSON.stringify(state));
      const newState = state.filter((f) => f !== action.payload);
      //   localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});
const { actions, reducer } = favoritesSlice;
export const { addToFavorites, removeFromFavorites } = actions;
export default reducer;
