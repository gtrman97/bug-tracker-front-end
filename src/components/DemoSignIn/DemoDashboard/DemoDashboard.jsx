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
      <div className={styles.dashboard}>
        <Card />
        <Card />
        <Card />

      </div>
    </main>
  );
};

export default DemoDashboard;