import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// eslint-disable-next-line import/no-cycle
import apiSlice from "../api";

const initialState = {
  isAuthorized: false,
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
    setAuthorization(state) {
      state.isAuthorized = true;
      localStorage.setItem('isAuthorized', true);
    },
    reset() {
      return { ...initialState };
    }
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.doctor = payload.doctor;
        
        localStorage.setItem('doctor', JSON.stringify(payload.doctor));
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
