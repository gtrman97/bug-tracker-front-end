import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {
  const selection = props.selection;

  const logSelected = props.selectionChangeHandler;
  const getUser = props.getUser;
  const getRole = props.getRole;

  const getIndex = props.indexChangeHandler;

  const cols = props.selection === "person" ? true : false;

  const [selected, setSelected] = useState(false);

  const toggle = (event) => {
    let clicked = !selected;
    getIndex((clicked) ? props.index : null);
    setSelected(clicked);
    if(props.selection === 'user') getUser((clicked) ? event.target.innerText : null);
    if(props.selection === 'role') getRole((clicked) ? event.target.innerText : null);

    // logSelected((clicked) ? event.target.innerText : null);
    
  };

  return (
    <>
      <tr
        className={selected ? styles[`toggle-${selection}`] : ""}
        onClick={toggle}
      >
        <td className={cols ? styles[`person-row`] : styles['user-row']}>
          <div className={cols ? styles[`person-col`] : ''}>{cols ? props.user.name : props.user}</div>
          {cols ? (
            <>
            <div className={styles['person-col']}>{props.user.email}</div>
            <div className={styles['person-col']}>{props.user.role}</div>
            </>
          ) : null}
        </td>
      </tr>
    </>
  );
};

export default User;
