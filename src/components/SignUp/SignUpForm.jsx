import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import FormHeader from "../SignIn/FormHeader";
import bugIcon from "../../images/icons/bug.png";
import Label from "../SignIn/Label";
import Button from "../SignIn/Button";

const SignUpForm = () => {
  return (
    <>
    <div className={styles["sign-up"]}>
      <span className={styles.span}></span>
      <FormHeader title={"sign up"} />
      <form className={styles["sign-up-form"]}>
        <img src={bugIcon} alt="bug icon" id={styles["logo"]} />
        <p className={styles.prompt}>
          Enter your name, email and password to register
        </p>
        <Label title={"email"} />
        <Label title={"password"} />
        <Label title={"confirm password"} />
        <Button title={"sign up"} color={"red"} />
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

export default SignUpForm;
