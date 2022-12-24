import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {
  const selection = props.selection;

  const cols = props.selection === "person" ? true : false;

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <>
      <tr
        className={selected ? styles[`toggle-${selection}`] : ""}
        onClick={toggle}
      >
        <td className={cols ? styles[`person-row`] : styles['user-row']}>
          <div className={cols ? styles[`person-col`] : ''}>{props.user}</div>
          {cols ? (
            <>
            <div className={styles['person-col']}>{props.user}</div>
            <div className={styles['person-col']}>{props.user}</div>
            </>
          ) : null}
        </td>
      </tr>
      {/* {cols ? (

      <td className={styles["user-row"]}>
        <div>poo</div>
      </td>
              ) : null} */}
    </>
  );
};

export default User;
