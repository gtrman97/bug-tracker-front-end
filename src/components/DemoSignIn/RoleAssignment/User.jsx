import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {

  const toggleUser = props.toggleUser;
  const toggleRole = props.toggleRole;

  const getIndex = props.indexChangeHandler;

  const cols = props.selection === "person" ? true : false;

  const userTable = props.selection === "user" ? true : false;
  const roleTable = props.selection === "role" ? true : false;

  const [selectedUser, setSelectedUser] = useState(false);
  const [selectedRole, setSelectedRole] = useState(false);

  const toggleUserGradient = (event) => {
    setSelectedUser(!selectedUser);
    toggleUser(event.target.innerText);
  };

  const toggleRoleGradient = (event) => {
    setSelectedRole(!selectedRole);
    getIndex(!selectedRole ? props.index : null);
    toggleRole(!selectedRole ? event.target.innerText : null);
  };

  return (
    <>
      <tr
        className={
          selectedUser
            ? styles[`toggle-user`]
            : (props.selectedIndex === props.index)
            ? styles["toggle-role"]
            : ""
        }
        onClick={roleTable ? toggleRoleGradient : userTable ? toggleUserGradient : null}
      >
        <td className={cols ? styles[`person-row`] : styles["user-row"]}>
          <div className={cols ? styles[`person-col`] : ""}>
            {cols ? props.user.name : props.user}
          </div>
          {cols ? (
            <>
              <div className={styles["email-col"]}>{props.user.email}</div>
              <div className={styles["person-col"]}>{props.user.role}</div>
            </>
          ) : null}
        </td>
      </tr>
    </>
  );
};

export default User;
