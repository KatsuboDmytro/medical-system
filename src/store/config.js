import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import apiSlice from "./api";
import authSlice from "./auth/authSlice";

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export default store;
