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
          <Card color={'red'} category={'priority'} when={'2 days ago'}/>
          <Card color={'blue'} category={'type'} when={'4 minutes ago'}/>
          <Card color={'green'} category={'status'} when={'just now'}/>
        </div>
      </div>
    </main>
  );
};

export default DemoDashboard;
