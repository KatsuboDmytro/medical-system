import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line import/no-cycle
import authSlice from './auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://warmedicapp-api.westeurope.cloudapp.azure.com/api',
});

const baseQueryWithAuthHandling = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) api.dispatch(authSlice.actions.reset());

  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithAuthHandling,
  tagTypes: ['Soldier', 'Note', 'Feedback'],
  endpoints: ({ mutation, query }) => ({
    // AUTH API
    login: mutation({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Soldier'],
    }),
    // SOLDIERS API
    getSoldiers: query({
      query: ({ searchValue }) => ({
        url: '/soldiers',
        params: {
          search: searchValue,
        },
      }),
      providesTags: ['Soldier'],
    }),
    getSoldier: query({
      query: ({ soldierId }) => ({
        url: `/soldiers/${soldierId}`,
      }),
      providesTags: (result, error, arg) => [
        {
          type: 'Soldier',
          id: arg.soldierId,
        },
      ],
    }),
    addSoldier: mutation({
      query: body => ({
        url: '/soldiers',
        method: 'POST',
        body,
      }),
    }),
    editSoldier: mutation({
      query: ({ soldierId, editData }) => ({
        url: `/soldiers/${soldierId}`,
        method: 'PUT',
        body: editData,
      }),
      invalidatesTags: ['Soldier'],
    }),
    // NOTES API
    getNotes: query({
      query: ({ soldierId }) => ({
        url: `/soldiers/${soldierId}/notes`,
      }),
      providesTags: (result, error, arg) => [
        {
          type: 'Soldier',
          id: arg.soldierId,
        },
      ],
    }),
    addNote: mutation({
      query: ({ soldierId, body }) => ({
        url: `/soldiers/${soldierId}/notes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: 'Soldier',
          id: arg.soldierId,
        },
      ],
    }),
    // FEEDBACK API
    getAllFeedback: query({
      query: () => ({
        url: '/soldiers/feedback',
      }),
      providesTags: ['Feedback'],
    }),
    getFeedback: query({
      query: ({ soldierId }) => ({
        url: `/soldiers/${soldierId}/feedbacks`,
      }),
      providesTags: (result, error, arg) => [
        {
          type: 'Soldier',
          id: arg.soldierId,
        },
      ],
    }),
    addFeedback: mutation({
      query: body => ({
        url: '/soldiers/feedbacks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export default apiSlice;
export const {
  // AUTH API
  useLoginMutation,
  // SOLDIERS API
  useGetSoldiersQuery,
  useGetSoldierQuery,
  useAddSoldierMutation,
  useEditSoldierMutation,
  // NOTES API
  useGetNotesQuery,
  useAddNoteMutation,
  // FEEDBACK API
  useGetAllFeedbackQuery,
  useGetFeedbackQuery,
  useAddFeedbackMutation,
} = apiSlice;
