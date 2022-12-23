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

  const roles = ["admin", "project manager", "developer", "submitter"];

  return (
    <div className={styles.main}>
      {/* <LoginButton /> */}
      {/* <TicketTable /> */}
      <div className={styles.users}>
        <AssignmentCard
          rows={users}
          selection={'user'}
          color={"red"}
          title={"select 1 or more users"}
        />
      </div>
      <div className={styles.personnel}>
        <AssignmentCard
          rows={roles}
          selection={'role'}
          color={"blue"}
          title={"select role to assign"}
        />
      </div>
      <div className={styles.roles}>
      <AssignmentCard
          rows={users}
          color={"green"}
          title={"your personnel"}
        />
      <button className={styles.assign}>assign</button>
      </div>
    </div>
  );
};

export default ManageRoles;
