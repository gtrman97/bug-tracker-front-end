import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css"
import FormHeader from "../SignIn/FormHeader";
import bugIcon from "../../images/icons/bug.png";
import Label from "../SignIn/Label";
import Button from "../SignIn/Button";

const ForgotPassword = () => {
  return (
    <div className={styles["forgot-password"]}>
          <FormHeader title={"Reset Password"} className={styles.header}/>
      <form className={styles["forgot-password-form"]}>
        <img src={bugIcon} alt="bug-icon" id={styles["logo"]} />
        <p className={styles.prompt} >Enter your email to reset your password</p>
        <Label title={"Email"} />
        <Button title={"Reset Password"} />
        <p className={styles.option}>Already have an account? <Link to='/' className={styles.link}>Sign In</Link></p>
      </form>
    </div>
  );
};

export default ForgotPassword;
