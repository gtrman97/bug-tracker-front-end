import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {

  const [selected, setSelected] = useState(false);

  return (
    <tr className={styles.user} onClick={(e) => {
      e.target.classList.toggle(styles[`toggle-${props.color}`])}}>
      <td className={styles["user-row"]}>
        <div>{props.user}</div>
      </td>
    </tr>
  );
};

export default User;
