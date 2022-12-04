import React from "react";
import styles from "./DemoDashboard.module.css";
import HeadNavBar from "./HeadNavBar";
import SideNavBar from "./SideNavBar";
import Card from "./Card";

const DemoDashboard = () => {
  return (
    <main id={styles["demo-app"]}>
      <div className={styles["head-nav"]}>
        <HeadNavBar />
      </div>
      <div className={styles["side-nav"]}>
        <SideNavBar />
      </div>
      <div className={styles["card-container"]}>
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
            ]} barWidth={45}
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
            ]} barWidth={65}
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
            ]} barWidth={55}
          />
        </div>
      </div>
    </main>
  );
};

export default DemoDashboard;
