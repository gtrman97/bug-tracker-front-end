import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavOption.module.css";

const NavOption = (props) => {
  return (
    <NavLink
      to="/"
      className={(active) => `${styles.link}  ${!active ? "" : "active"}`}
      activeClassName="active"
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      {props.title}
    </NavLink>
  );
};

export default NavOption;
