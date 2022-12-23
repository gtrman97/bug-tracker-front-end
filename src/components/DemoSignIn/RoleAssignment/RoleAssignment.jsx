import React from "react";
import styles from "./RoleAssignment.module.css";
// import LoginButton from "../../LoginButton";
import AssignmentCard from "./AssignmentCard";

const ManageRoles = () => {
  const users = [
    "john michael",
    "trevor strnad",
    "michael levi",
    "ryan knight",
    "brian eschbach",
    "john michael",
  ];

  return (
    <div className={styles.main}>
      {/* <LoginButton /> */}
      {/* <TicketTable /> */}
      <div className={styles.users}>
        <AssignmentCard rows={users} color={'red'} title={'select 1 or more users'}/>
      </div>
      <div className={styles.personnel}>
      <AssignmentCard rows={users} color={'blue'} title={'select role to assign'}/>
      </div>
      <div className={styles.roles}></div>
    </div>
  );
};

export default ManageRoles;
