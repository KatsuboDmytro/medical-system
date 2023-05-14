import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import apiSlice from './api';
import authSlice from './auth/authSlice';
import soldiersSlice from './soldiers/soldiersSlice';

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [soldiersSlice.name]: soldiersSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
