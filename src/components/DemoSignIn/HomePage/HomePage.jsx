import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./HomePage.module.css";
import HeadNavBar from "../Dashboard/HeadNavBar";
import SideNavBar from "../Dashboard/SideNavBar";

const isLoggedIn = (userId) => {};

// className={!sidenavVisibility ? styles['head-nav'] : `${styles['head-nav']} ${
//   styles['side-nav-slide']
// }`}

const DemoApp = () => {
  const [sidenavVisibility, SetSidenavVisibility] = useState(false);

  const animateNavbar = () => {
    SetSidenavVisibility(!sidenavVisibility);
  };
  return (
    <div className={styles["demo-app"]}>
      <div
        className={
          styles['head-nav']}
      >
        <HeadNavBar animateHandler={animateNavbar} />
      </div>
      <div className={
          !sidenavVisibility
            ? styles["side-nav"]
            : `${styles["side-nav"]} ${styles["side-nav-slide"]}`
        }>
        <SideNavBar />
      </div>
      <main className={sidenavVisibility ? styles.hidden : styles["main-content"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default DemoApp;
