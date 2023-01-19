import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import styles from "./DemoSignIn.module.css";
import FormHeader from "../SignIn/FormHeader";
import black_avatar from "../../images/icons/black_user.svg";
import red_avatar from "../../images/icons/red_user.svg";
import blue_avatar from "../../images/icons/blue_user.svg";
import green_avatar from "../../images/icons/green_user.svg";
import { TypeAnimation } from "react-type-animation";

const DemoSignIn = () => {
  return (
    <>
    <div className={styles["demo-sign-in"]}>
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
      <FormHeader title={"Demo Log In"} />
      <form className={styles["demo-sign-in-form"]}>
        <div id={styles["users"]}>
          <Avatar title={"Admin"} avatar={black_avatar} userId={1} path={"/"} />
          <Avatar
            title={"Manager"}
            avatar={red_avatar}
            userId={2}
            path={"/demo-app"}
          />
          <Avatar
            title={"Developer"}
            avatar={blue_avatar}
            userId={3}
            path={"/demo-app"}
          />
          <Avatar
            title={"Submitter"}
            avatar={green_avatar}
            userId={4}
            path={"/demo-app"}
          />
        </div>
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

export default DemoSignIn;
