import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiSlice from "../api";

const initialState = {
  token: localStorage.getItem('token'),
  doctor: {
    id: '',
    username: '',
    name: '',
    surname: '',
    role: 'tactical',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
    reset() {
      return { token: null, username: null };
    }
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
                
        localStorage.setItem('token', payload.token);
        localStorage.setItem('user', JSON.stringify(payload.user));
      }
    );
    addMatcher(
      apiSlice.endpoints.login.matchRejected,
      (_, { payload }) => {
        toast.error(payload.data.message);
      },
    );
  },
});

export default authSlice;
