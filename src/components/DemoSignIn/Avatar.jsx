import React from "react";
import { Link } from "react-router-dom";
import styles from "./Avatar.module.css"

const Avatar = (props) => {

  const {path, userId, avatar, title} = props;

  return (
    <div className={styles.option}>
      <Link to={path} permissions={userId}  className={styles.link}>
        <img src={avatar} alt="avatar" className={styles["avatar"]} />
        <p className={styles.user}>{title}</p>
      </Link>
    </div>
  );
};

export default Avatar;
