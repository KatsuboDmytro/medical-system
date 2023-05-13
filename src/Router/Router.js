import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import endpoints from "./endpoints";

const Router = () => {
  <BrowserRouter>
    <Routes>
      <Route path={endpoints.main} element={<Home />} />
      <Route path="*" element={<Navigate to={endpoints.main} />} />
    </Routes>
  </BrowserRouter>;
};

export default Router;
