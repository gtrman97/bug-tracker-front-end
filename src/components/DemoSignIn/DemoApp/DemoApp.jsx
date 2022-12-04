import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./DemoApp.module.css";
import HeadNavBar from "../DemoDashboard/HeadNavBar";
import SideNavBar from "../DemoDashboard/SideNavBar";
import DemoDashboard from "../DemoDashboard/DemoDashboard";

const DemoApp = () => {
  return (
    <div className={styles["demo-app"]}>
      <div className={styles["head-nav"]}>
        <HeadNavBar />
      </div>
      <div className={styles["side-nav"]}>
        <SideNavBar />
      </div>
      <main>
        
      </main>
    </div>
  );
};

export default DemoApp;
