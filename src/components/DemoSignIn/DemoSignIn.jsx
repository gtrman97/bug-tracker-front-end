import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import styles from "./DemoSignIn.module.css"
import FormHeader from "../SignIn/FormHeader";



const DemoSignIn = () => {
  return (
    <div className={styles["demo-sign-in"]}>
                <FormHeader title={"Demo Log In"} className={styles.header}/>
      <form className={styles["demo-sign-in-form"]}>
        <div id={styles["users"]}>
          <Avatar title={"Admin"} userId={1}/>
          <Avatar title={"Manager"} userId={2}/>
          <Avatar title={"Developer"} userId={3}/>
          <Avatar title={"Submitter"} userId={4}/>
        </div>
        <p className={styles.option}>
          Already have an account? <Link to="/" className={styles.link}>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default DemoSignIn;
