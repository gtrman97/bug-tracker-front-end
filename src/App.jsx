// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<SignInForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/demo-sign-in" element={<DemoSignIn />} />
        <Route path="/demo-dashboard" element={<DemoDashboard />} />
        {/* <Route path="*" element={<DemoSignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
