import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";
import endpoints from "./endpoints";
import PatientCard from "../component/patient_card/PatientCard"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endpoints.main} element={<Home />} />
        <Route path={endpoints.login} element={<Login />} />
        <Route path={endpoints.patientcard} element={<PatientCard />} />
        <Route path="*" element={<Navigate to={endpoints.main} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
