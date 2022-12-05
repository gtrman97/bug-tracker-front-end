// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUpForm from "./components/SignUp/SignUpForm";
import DemoSignIn from "./components/DemoSignIn/DemoSignIn";
import DemoApp from "./components/DemoSignIn/DemoApp/DemoApp";
import DemoDashboard from "./components/DemoSignIn/DemoDashboard/DemoDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<SignInForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/demo-sign-in" element={<DemoSignIn />} />
        <Route path="/demo-dashboard" element={<DemoDashboard />} />
        <Route path="/demo-app" element={<DemoApp />}>
          {/* <Route path="/demo-dashboard" element={<DemoDashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
