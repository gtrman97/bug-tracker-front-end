import React from "react";
import styles from "./NavBarHeader.module.css";

const NavBarHeader = () => {
  return (
    <div className={styles["nav-bar-header"]}>
      <h4 className={styles.heading}>
        <span>Dashboard</span>
      </h4>
      <button className={styles.close}>X</button>
    </div>
  );
};

export default NavBarHeader;
