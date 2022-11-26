import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./DemoApp.module.css";
import DemoDashboard from "../DemoDashboard/DemoDashboard";

const DemoApp = () => {
  return (
    <div className={styles["demo-app"]}>
        <DemoDashboard />
      <Routes>
        <Route path="/dashboard-demo" index element={<DemoDashboard permissions={1}/>} />
        {/* <Route
          path="/manage-role-assignment-demo"
          element={<ForgotPassword />}
        />
        <Route path="/manage-project-users-demo" element={<SignUpForm />} />
        <Route path="/my-projects-demo" element={<DemoSignIn />} />
        <Route path="/my-tickets-demo" element={<DemoDashboard />} />
        <Route path="/notifications-demo" element={<DemoDashboard />} /> */}
      </Routes>
    </div>
  );
};

export default DemoApp;
