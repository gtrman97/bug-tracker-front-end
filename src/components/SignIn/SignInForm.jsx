import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./SignInForm.module.css";
import FormHeader from "./FormHeader";
import bugIcon from "../../images/icons/bug.png";
import Label from "../SignIn/Label";
import Button from "../SignIn/Button";
import { TypeAnimation } from "react-type-animation";

const SignInForm = () => {
  return (
    <>
      <div className={styles["sign-in"]}>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "Welcome to Bug Tracker",
            1000,
            "Create Projects",
            1000,
            "Track Issues",
            1000,
            "Add Features",
            1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{
            fontSize: "1.5rem",
            color: "white",
            height: "5rem",
            display: "flex",
            alignItems: 'center', 
            justifyContent: 'center'
          }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        <FormHeader title={"sign in"} type={"main"} />
        <form className={styles["sign-in-form"]}>
          <img src={bugIcon} alt="bug icon" id={styles.logo} />
          <Label title={"email"} />
          <Label title={"password"} />
          <Button title={"sign in"} className="button" color={"red"} />
          <div>
            <p className={styles.option}>
              {"Forgot your "}
              <Link to="/forgot-password" className={styles.link}>
                Password?
              </Link>
            </p>
            <p className={styles.option}>
              {"Don't have an account? "}
              <Link to="/sign-up" className={styles.link}>
                Sign Up
              </Link>
            </p>
            <p className={styles.option}>
              {"Sign in as a "}
              <Link to="/demo-sign-in" className={styles.link}>
                Demo User
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
