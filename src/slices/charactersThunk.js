import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ url, page }, { rejectWithValue, getState }) => {
    // ici il va falloir faire notre requête
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("page", page);
      const res = await fetch(urlObj.toString());
      if (res.status === 404) return { results: [], info: { pages: 0 } };
      if (!res.ok) return rejectWithValue("Il y a eu une erreur"); //rejected
      return await res.json(); // fulfilled => {info, results}
    } catch (err) {
      return rejectWithValue(err.message); //rejected
    }
  }
);

export const maDemo = createAsyncThunk(
  "characters/demo",
  async (_, { rejectWithValue, getState }) => {
    return new Promise((resolve, reject) => {
      const state = getState();
      console.log("getState", state);
      resolve(state.favorites);
    });
  }
);
