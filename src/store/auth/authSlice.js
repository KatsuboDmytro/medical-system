import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-cycle
import apiSlice from '../api';
import { toastOptions } from '../../constants/common';

const initialState = {
  isAuthorized: localStorage.getItem('isAuthorized') || true,
  doctor: JSON.parse(localStorage.getItem('doctor') || 'null'),
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
      return {
        isAuthorized: false,
        doctor: {
          id: '',
          username: '',
          name: '',
          surname: '',
          role: '',
        },
      };
    },
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
      const doctorState = {
        id: payload.doctor_id,
        username: payload.username,
        name: payload.doctor_name,
        surname: payload.doctor_surname,
        role: payload.role_name,
      };

      state.doctor = { ...doctorState };

      localStorage.setItem('doctor', JSON.stringify(doctorState));
    });
    addMatcher(apiSlice.endpoints.login.matchRejected, () => {
      toast.error('Invalid username or password', toastOptions);
    });
  },
});

export default authSlice;
