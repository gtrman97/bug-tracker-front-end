import React from "react";
import styles from './NavBarHeader.module.css'

const NavBarHeader = () => {
  return (
    <div className={styles["nav-bar-header"]}>
      <heading className={styles.heading}>
        {/* <img
            src="../assets/img/logo-ct.png"
            class="navbar-brand-img h-100"
            alt="main_logo"
          /> */}
        <span>Dashboard</span>
      </heading>
    </div>
  );
};

export default NavBarHeader;
