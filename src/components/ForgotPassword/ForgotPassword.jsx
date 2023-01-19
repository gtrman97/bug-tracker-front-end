import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";
import FormHeader from "../SignIn/FormHeader";
import bugIcon from "../../images/icons/bug.png";
import Label from "../SignIn/Label";
import Button from "../SignIn/Button";
import { TypeAnimation } from "react-type-animation";

const ForgotPassword = () => {
  return (
    <>
    <div className={styles["forgot-password"]}>
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
            justifyContent: 'center', 
            visibility: 'hidden'
          }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      <FormHeader title={"reset password"} />
      <form className={styles["forgot-password-form"]}>
        <img src={bugIcon} alt="bug-icon" id={styles["logo"]} />
        <p className={styles.prompt}>Enter your email to reset your password</p>
        <Label title={"email"} />
        <Button title={"reset password"} color={"red"} />
        <p className={styles.option}>
          Already have an account?{" "}
          <Link to="/sign-in" className={styles.link}>
            Sign In
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default ForgotPassword;
