import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignIn/SignInForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUpForm from "./components/SignUp/SignUpForm";
import DemoSignIn from "./components/DemoSignIn/DemoSignIn";
import HomePage from "./components/DemoSignIn/HomePage/HomePage";
import Dashboard from "./components/DemoSignIn/Dashboard/Dashboard";
import RoleAssignment from "./components/DemoSignIn/RoleAssignment/RoleAssignment";
import Projects from "./components/DemoSignIn/MyProjects/Projects";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/demo-sign-in" element={<DemoSignIn />} />
        <Route path="/" element={<HomePage />}>
          <Route
            index // <-- rendered on "/"
            element={<Dashboard />}
          />
          {/* <Route
            path="demo-dashboard" // <-- rendered on "/demo-dashboard"
            element={<DemoDashboard />}
          /> */}
          <Route path='/role-assignment' element={<RoleAssignment />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

const setPermissionsId = () => {};
