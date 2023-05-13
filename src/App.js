import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Router from "./Router/Router";
import store from "./store/config";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  );
};

export default App;
