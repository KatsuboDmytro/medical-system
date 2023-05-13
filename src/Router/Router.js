import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { AllSoldiers } from "../screens/AllSoldiers";
import { SoldierInfo } from "../screens/SoldierInfo";

import endpoints from "./endpoints";
import PatientCard from "../component/patient_card/PatientCard";
import Feedback from "../screens/Feedback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endpoints.main} element={<Home />} />
        <Route path={endpoints.login} element={<Login />} />
        <Route path={endpoints.feedback} element={<Feedback />} />
        <Route path={endpoints.soldiers} element={<AllSoldiers />} />
        <Route path={endpoints.soldiersInfo} element={<SoldierInfo />} />
        <Route path={endpoints.patientcard} element={<PatientCard />} />
        <Route path="*" element={<Navigate to={endpoints.soldiers} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
