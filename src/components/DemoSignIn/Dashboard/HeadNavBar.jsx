import React from "react";
import styles from "./HeadNavBar.module.css";
import avatar from "../../../images/icons/default_avatar.svg";
import menu from '../../../images/icons/menu.png';
import bell from "../../../images/icons/bell.png";
import setting from "../../../images/icons/setting.png";
import { Link } from "react-router-dom";

const HeadNavBar = () => {
  return (
    <nav className={styles["head-nav-bar"]}>
      <h6 className={styles.heading}>Welcome, Demo User</h6>
      <div className={styles["nav-options"]}>
        <div className={styles.search}>
          <input
            type={"text"}
            placeholder={"Type here..."}
            className={styles["search-bar"]}
          ></input>
        </div>
        <div className={styles["nav-links"]}>
        <Link to="/sign-in" className={styles.link}>

          <div className={styles['sign-in-section']}>
            <img src={avatar} className={styles.icon} alt='avatar'></img>
            <p className={styles["title"]}>Sign In</p>
          </div>
          </Link>
          <Link to="/" className={styles.link} id={styles.menu}>
            <img src={menu} className={styles.icon} alt='menu-icon'></img>
          </Link>
          <Link to="/settings" className={styles.link}>
            <img src={setting} className={styles.icon} alt='settings-icon'></img>
          </Link>
          <Link to="/notifications" className={styles.link}>
            <img src={bell} className={styles.icon} alt='notification-bell'></img>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeadNavBar;
