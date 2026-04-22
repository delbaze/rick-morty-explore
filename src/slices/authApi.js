import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      // POST, PATCH, PUT, DELETE
      query: ({ username, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { username, password, expiresInMins: 30 },
        credentials: "include",
      }),
    }),
    getMe: builder.query({
      query: () => "/auth/me",
      credentials: "include",
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
