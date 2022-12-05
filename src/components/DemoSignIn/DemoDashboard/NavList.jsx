import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";
import dashboard from "../../../images/icons/dashboard.png";
import change from "../../../images/icons/change.png";
import invoice from "../../../images/icons/invoice.png";
import box from "../../../images/icons/box.png";
import ticket from "../../../images/icons/ticket.png";
import bell from "../../../images/icons/bell.png";

const NavList = () => {
  return (
    <div id={styles["nav-bar-list"]}>
      <ul className={styles.list}>
        <NavLink to="/demo-app/demo-dashboard" className={styles.link}>
          <img src={dashboard} className={styles.icon} alt="dashboard" />
          Dashboard
        </NavLink>
        <NavLink to="/demo-app" className={styles.link}>
          <img src={change} className={styles.icon} alt="change" />
          Manage Role Assignment
        </NavLink>
        <NavLink to="/" className={styles.link}>
          <img src={invoice} className={styles.icon} alt="invoice" />
          Manage Project Users
        </NavLink>
        <NavLink to="/" className={styles.link}>
          <img src={box} className={styles.icon} alt="box" />
          My Projects
        </NavLink>
        <NavLink to="/" className={styles.link}>
          <img src={ticket} className={styles.icon} alt="ticket" />
          My Tickets
        </NavLink>
        <NavLink to="/notifications" className={styles.link}>
          <img src={bell} className={styles.icon} alt="bell" />
          Notifications
        </NavLink>
        {/* <NavLink title={"Notifications"} /> */}
      </ul>
    </div>
  );
};

export default NavList;
