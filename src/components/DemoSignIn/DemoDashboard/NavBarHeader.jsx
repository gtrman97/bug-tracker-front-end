import React from "react";
import styles from './NavBarHeader.module.css'

const NavBarHeader = () => {
  return (
    <div className={styles["nav-bar-header"]}>
      <heading className={styles.heading}>
        <span>Dashboard</span>
      </heading>
    </div>
  );
};

export default NavBarHeader;
