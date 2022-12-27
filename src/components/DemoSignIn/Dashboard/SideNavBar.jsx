import React from "react";
import NavBarHeader from "./NavBarHeader";
import NavList from "./NavList";
import NavBarFooter from "./NavBarFooter";
import styles from "./NavBar.module.css";

const SideNavBar = () => {
  return (
    <aside id={styles["nav-bar"]}>
      <NavBarHeader />
      <NavList />
      <NavBarFooter />
    </aside>
  );
};

export default SideNavBar;
