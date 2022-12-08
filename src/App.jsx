// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUpForm from "./components/SignUp/SignUpForm";
import DemoSignIn from "./components/DemoSignIn/DemoSignIn";
import HomePage from "./components/DemoSignIn/HomePage/HomePage";
import DemoDashboard from "./components/DemoSignIn/DemoDashboard/DemoDashboard";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/demo-sign-in" element={<DemoSignIn />} />
        <Route path="/demo-dashboard" element={<DemoDashboard />} />
        <Route path="/" element={<HomePage />}>
          <Route
            index // <-- rendered on "/"
            element={<DemoDashboard />}
          />
          {/* <Route
            path="demo-dashboard" // <-- rendered on "/demo-dashboard"
            element={<DemoDashboard />}
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

const setPermissionsId = () => {};
