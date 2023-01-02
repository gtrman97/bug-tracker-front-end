import {React, useState} from "react";
import NavBarHeader from "./NavBarHeader";
import NavList from "./NavList";
import NavBarFooter from "./NavBarFooter";
import styles from "./NavBar.module.css";

const SideNavBar = () => {

  const [navHeader, setNavHeader] = useState('Dashboard')

  const getLinkText = (event) => {
    setNavHeader(event.target.innerText);
  }

  return (
    <aside id={styles["nav-bar"]}>
      <NavBarHeader title={navHeader}/>
      <NavList onNavHeaderHandler={getLinkText}/>
      <NavBarFooter />
    </aside>
  );
};

export default SideNavBar;
