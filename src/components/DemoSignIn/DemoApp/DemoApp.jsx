import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./DemoApp.module.css";
import HeadNavBar from "../DemoDashboard/HeadNavBar";
import SideNavBar from "../DemoDashboard/SideNavBar";
import DemoDashboard from "../DemoDashboard/DemoDashboard";
import Card from "../DemoDashboard/Card";

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
        <div className={styles.cards}>
          <Card
            color={"red"}
            category={"priority"}
            when={"2 days ago"}
            data={[
              {
                name: "None",
                pv: 3,
              },
              {
                name: "Low",
                pv: 5,
              },
              {
                name: "Medium",
                pv: 7,
              },
              {
                name: "High",
                pv: 5,
              },
            ]}
            barWidth={45}
          />
          <Card
            color={"blue"}
            category={"type"}
            when={"4 minutes ago"}
            data={[
              {
                name: "Bugs",
                pv: 11,
              },
              {
                name: "Features",
                pv: 7,
              },
            ]}
            barWidth={65}
          />
          <Card
            color={"green"}
            category={"status"}
            when={"just now"}
            data={[
              {
                name: "Open",
                pv: 18,
              },
              {
                name: "In Progress",
                pv: 10,
              },
              {
                name: "Resolved",
                pv: 21,
              },
            ]}
            barWidth={55}
          />
        </div>
      </main>
    </div>
  );
};

export default DemoApp;
