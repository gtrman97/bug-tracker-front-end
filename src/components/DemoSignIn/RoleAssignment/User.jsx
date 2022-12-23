import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {

  const selection = props.selection;

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  }

  return (
    <tr className={selected ? styles[`toggle-${selection}`] : ""} onClick={toggle}>
      <td className={styles["user-row"]}>
        <div>{props.user}</div>
      </td>
    </tr>
  );
};

export default User;
