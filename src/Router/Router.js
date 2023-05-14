import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login } from "../Screens/Login";
import { AllSoldiers } from "../Screens/AllSoldiers";
import { SoldierInfo } from "../Screens/SoldierInfo";

import endpoints from "./endpoints";
import PatientCard from "../component/patient_card/PatientCard";
import Feedback from "../Screens/Feedback";

const AuthorizedRoute = ({ children }) => {
  const isDoctorAuthorized = useSelector(state => state.auth.isAuthorized);

  if (!isDoctorAuthorized) {
    return <Navigate to={endpoints.login} />;
  }

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endpoints.login} element={<Login />} />
        <Route path={endpoints.feedback} element={<AuthorizedRoute><Feedback /></AuthorizedRoute>} />
        <Route path={endpoints.soldiers} element={<AuthorizedRoute><AllSoldiers /></AuthorizedRoute>} />
        <Route path={endpoints.soldiersInfo} element={<AuthorizedRoute><SoldierInfo /></AuthorizedRoute>} />
        <Route path={endpoints.patientcard} element={<AuthorizedRoute><PatientCard /></AuthorizedRoute>} />
        <Route path="*" element={<Navigate to={endpoints.soldiers} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
