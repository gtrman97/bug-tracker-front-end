import React from "react";
import styles from "./User.module.css";

const User = (props) => {

  return (
    <tr className={styles.user} onClick={(e) => {e.target.classList.toggle(styles['selected-user'])}}>
      <td className={styles["user-row"]}>
        <div>{props.user}</div>
      </td>
    </tr>
  );
};

export default User;
