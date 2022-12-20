import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./SignInForm.module.css";
import FormHeader from "./FormHeader";
import bugIcon from "../../images/icons/bug.png";
import Label from "../SignIn/Label";
import Button from "../SignIn/Button";

const SignInForm = () => {
  return (
    <div className={styles["sign-in"]}>
      <FormHeader title={"Sign In"} className={styles.header}/>
      <form className={styles["sign-in-form"]}>
        <img src={bugIcon} alt="bug icon" id={styles.logo} />
        <Label title={"username"} />
        <Label title={"password"} />
        <Button title={"sign in"} className="button" color={'red'}/>
        <div>
          <p className={styles.option}>
            {'Forgot your '}
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
            {'Sign in as a '}
            <Link to="/demo-sign-in" className={styles.link}>
              Demo User
            </Link>
          </p>
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default SignInForm;
