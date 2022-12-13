import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./HomePage.module.css";
import HeadNavBar from "../Dashboard/HeadNavBar";
import SideNavBar from "../Dashboard/SideNavBar";

const isLoggedIn = (userId) => {

}

const DemoApp = () => {

  return (
    <div className={styles["demo-app"]}>
      <div className={styles["head-nav"]}>
        <HeadNavBar />
      </div>
      <div className={styles["side-nav"]}>
        <SideNavBar />
      </div>
      <main className={styles["main-content"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default DemoApp;
