import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./DemoApp.module.css";
import HeadNavBar from "../DemoDashboard/HeadNavBar";
import SideNavBar from "../DemoDashboard/SideNavBar";
import DemoDashboard from "../DemoDashboard/DemoDashboard";

const isLoggedIn = (userId) => {

}

const DemoApp = (props) => {

  console.log(props);

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
