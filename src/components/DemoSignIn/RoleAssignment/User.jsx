import React from "react";
import { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {

  const {toggleUser, toggleRole, selection, user, index} = props;

  const getIndex = props.indexChangeHandler;

  const cols = selection === "person" ? true : false;

  const userTable = selection === "user" ? true : false;
  const roleTable = selection === "role" ? true : false;

  const [selectedUser, setSelectedUser] = useState(false);
  const [selectedRole, setSelectedRole] = useState(false);

  const toggleUserGradient = (event) => {
    setSelectedUser(!selectedUser);
    toggleUser(event.target.innerText);
  };

  const toggleRoleGradient = (event) => {
    setSelectedRole(!selectedRole);
    getIndex(!selectedRole ? index : null);
    toggleRole(!selectedRole ? event.target.innerText : null);
  };

  return (
    <>
      <tr
        className={
          selectedUser
            ? styles[`toggle-user`]
            : (props.selectedIndex === index)
            ? styles["toggle-role"]
            : ""
        }
        onClick={roleTable ? toggleRoleGradient : userTable ? toggleUserGradient : null}
      >
        <td className={cols ? styles[`person-row`] : styles["user-row"]}>
          <div className={cols ? styles[`person-col`] : ""}>
            {cols ? user.name : user}
          </div>
          {cols ? (
            <>
              <div className={styles["email-col"]}>{user.email}</div>
              <div className={styles["person-col"]}>{user.role}</div>
            </>
          ) : null}
        </td>
      </tr>
    </>
  );
};

export default User;
