import React from "react";
import styles from "./NavBarHeader.module.css";

const NavBarHeader = (props) => {

  const { title } = props;

  return (
    <div className={styles["nav-bar-header"]}>
      <h4 className={styles.heading}>
        <span>{title}</span>
      </h4>
      {/* <button className={styles.close}>X</button> */}
    </div>
  );
};

export default NavBarHeader;
