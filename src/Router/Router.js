import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../Screens/Login";
import { AllSoldiers } from "../Screens/AllSoldiers";
import { SoldierInfo } from "../Screens/SoldierInfo";

import endpoints from "./endpoints";
import PatientCard from "../component/patient_card/PatientCard";
import Feedback from "../Screens/Feedback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
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
