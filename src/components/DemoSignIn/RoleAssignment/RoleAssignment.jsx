import React from "react";
import styles from "./RoleAssignment.module.css";
// import LoginButton from "../../LoginButton";
import TicketTable from "../MyTickets/TicketTable";

const ManageRoles = () => {
  return (
    <div className={styles.main}>
      {/* <LoginButton /> */}
      {/* <TicketTable /> */}
      <div className={styles.users}></div>
      <div className={styles.personnel}></div>
      <div className={styles.roles}></div>
    </div>
  );
};

export default ManageRoles;
