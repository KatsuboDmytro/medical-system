import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost', // TODO: change to BE link
});

const apiSlice = createApi({
  baseQuery,
  endpoints: ({ mutation, query }) => ({
    login: mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export default apiSlice;
export const {
  useLoginMutation,
} = apiSlice;
