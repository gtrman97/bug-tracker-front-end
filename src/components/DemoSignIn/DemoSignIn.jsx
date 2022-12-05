import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import styles from "./DemoSignIn.module.css"
import FormHeader from "../SignIn/FormHeader";
import black_avatar from "../../images/icons/black_user.svg";
import red_avatar from "../../images/icons/red_user.svg";
import blue_avatar from "../../images/icons/blue_user.svg";
import green_avatar from "../../images/icons/green_user.svg";




const DemoSignIn = () => {
  return (
    <div className={styles["demo-sign-in"]}>
                <FormHeader title={"Demo Log In"} className={styles.header}/>
      <form className={styles["demo-sign-in-form"]}>
        <div id={styles["users"]}>
          <Avatar title={"Admin"} avatar={black_avatar} userId={1} path={'/demo-app/demo-dashboard'}/>
          <Avatar title={"Manager"} avatar={red_avatar} userId={2} path={'/demo-app'}/>
          <Avatar title={"Developer"} avatar={blue_avatar} userId={3} path={'/demo-app'}/>
          <Avatar title={"Submitter"} avatar={green_avatar} userId={4} path={'/demo-app'}/>
        </div>
        <p className={styles.option}>
          Already have an account? <Link to="/" className={styles.link}>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default DemoSignIn;
