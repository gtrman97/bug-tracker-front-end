import React from "react";
import styles from "./NavBarFooter.module.css";
// import NavLink from "./NavLink";
import { NavLink, Link } from "react-router-dom";
import avatar from "../../../images/icons/default_avatar.svg";
import signIn from "../../../images/icons/sign-in.png";
import clipboard from "../../../images/icons/clipboards.png";


const NavBarFooter = () => {
  return (
    <div className={styles["nav-bar-footer"]}>
      <h4 className={styles.heading}>
        <span>Account Pages</span>
      </h4>
      <ul className={styles.list}>
        <NavLink
          to="/profile"
          // Come back to this later
          // className={({ isActive }) =>
          //   isActive ? `${styles.active} ${styles.Link}` : `${styles.inactive} ${styles.link}`
          // }
          className={styles.link}

        >
          <img src={avatar} className={styles.icon} alt='avatar'/>
          Profile
        </NavLink>
        <Link to="/" className={styles.link}>
        <img src={signIn} className={styles.icon} alt='sign-in-icon'/>
          Sign In
        </Link>
        <Link to="/sign-up" className={styles.link}>
        <img src={clipboard} className={styles.icon} alt='clipboard'/>
          Sign Up
        </Link>
      </ul>
    </div>
  );
};

export default NavBarFooter;
