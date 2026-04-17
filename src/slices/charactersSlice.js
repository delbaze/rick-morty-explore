import { createSlice, isPending, isRejected, current } from "@reduxjs/toolkit";
import { fetchCharacters, maDemo } from "./charactersThunk";

export const DEFAULT_URL = "https://rickandmortyapi.com/api/character/";

// Slice

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    page: 1,
    url: DEFAULT_URL,
    pagesArray: [],
    status: "idle", // succeeded, loading, failed
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.results;
        state.pagesArray = Array.from(
          { length: action.payload.info.pages },
          (_, i) => i + 1
        );
        // ici c'est lorsque la requête a aboutie et n'est pas revenue en échec
      })
      //   .addCase(isRejected(fetchCharacters), (state, action) => {
      .addCase(fetchCharacters.rejected, (state, action) => {
        // ici c'est lorsque la requête a échouée
      })
      .addCase(
        fetchCharacters.pending,
        //   .addCase(isPending(fetchCharacters), (state) => {}),
        (state, action) => {
          state.status = "loading";
          state.error = null;
          // ici c'est lorsque la requête est en cours
        }
      )
      .addCase(maDemo.fulfilled, (state, action) => {
        console.log("ACTIOn", action.payload);
        current(state).items.forEach((i) => {
          if (action.payload.includes(i.id)) {
            console.log(i);
          }
        });
      });
  },
});

export const { setPage, setUrl } = charactersSlice.actions;
export default charactersSlice.reducer;
