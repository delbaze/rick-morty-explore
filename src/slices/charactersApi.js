import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      // useGetCharactersQuery
      query: ({ page = 1, name = "", status = "", gender = "" }) => {
        const params = new URLSearchParams();
        if (name) params.set("name", name);
        if (status && status !== "all") {
          params.set("status", status);
        }
        if (gender && gender !== "all") {
          params.set("gender", gender);
        }
        params.set("page", page);
        return `/character?${params.toString()}`;
      },
    }),
    // getCharacterById: builder.query({}), // useGetCharacterByIdQuery
  }),
});

export const { useGetCharactersQuery, useLazyGetCharactersQuery } =
  charactersApi;
