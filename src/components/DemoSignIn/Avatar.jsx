import React from "react";
import { Link } from "react-router-dom";
import styles from "./Avatar.module.css"

const Avatar = (props) => {

  return (
    <div className={styles.option}>
      <Link to={props.path} permissions={props.userId}  className={styles.link}>
        <img src={props.avatar} alt="avatar" className={styles["avatar"]} />
        <p className={styles.user}>{props.title}</p>
      </Link>
    </div>
  );
};

export default Avatar;
