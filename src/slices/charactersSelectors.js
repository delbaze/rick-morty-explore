import { createSelector } from "@reduxjs/toolkit";
const DEMO_ITEMS = ["a", "b", "c"];
export const selectItems = (state) => state.characters.items;
export const selectStatus = (state) => state.characters.status;
export const selectPage = (state) => state.characters.page;
export const selectUrl = (state) => state.characters.url;
export const selectError = (state) => state.characters.error;
export const selectPagesArray = (state) => state.characters.pagesArray;
export const selectDemo = (state) => DEMO_ITEMS;

// sans createSelector -> recalculé à chaque rendu
export const selectFiltered = (state) =>
  state.characters.items.filter((c) => c.name.toLowerCase().includes("rick"));

// avec createSElector -> recalculé uniquement si items change
export const selectFilteredAvecCreateSelector = createSelector(
  [selectDemo],
  (items) => {
    return items.filter((c) => c === "a");
  }
);
