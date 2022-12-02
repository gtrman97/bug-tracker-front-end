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
          <Card color={'red'} category={'Priority'}/>
          <Card color={'blue'} category={'Type'}/>
          <Card color={'green'} category={'Status'}/>
        </div>
      </div>
    </main>
  );
};

export default DemoDashboard;
