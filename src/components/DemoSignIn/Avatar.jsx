import React from "react";
import { Link } from "react-router-dom";
import styles from "./Avatar.module.css"
import avatar from "../../images/icons/user.png";

const Avatar = (props) => {

  return (
    <div className={styles.option}>
      <Link to="/demo-dashboard" permissions={props.userId}  className={styles.link}>
        <img src={avatar} alt="avatar" className={styles["avatar"]} />
        <p className={styles.user}>{props.title}</p>
      </Link>
    </div>
  );
};

export default Avatar;
