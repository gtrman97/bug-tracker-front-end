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
    "john michael",
    "brian eschbach",
    "john michael",
    "john michael",
    "brian eschbach",
    "john michael",
    "john michael",
    "brian eschbach",
    "john michael",
    "john michael",
  ];

  const roles = ["admin", "project manager", "developer", "submitter"];

  const personnel = [
    {
      name: "john michael",
      email: "john@john-michael.com",
      role: "developer",
    },
    {
      name: "alex liras",
      email: "alex@alex-liras.com",
      role: "submitter",
    },
    {
      name: "lawrence perry",
      email: "lawrence@lawrence-perry.com",
      role: "submitter",
    },
    {
      name: "michael levi",
      email: "michael@michael-levi.com",
      role: "project manager",
    },
    {
      name: "richard gran",
      email: "richard@richard-gran.com",
      role: "project manager",
    },
    {
      name: "moby eric",
      email: "moby@moby-eric.com",
      role: "submitter",
    },
    {
      name: "jimmy jones",
      email: "jimmy@jimmy-jones.com",
      role: "developer",
    },
    {
      name: "trevor strnad",
      email: "trevor@trevor-strnad.com",
      role: "project manager",
    },
    {
      name: "brian eschbach",
      email: "brian@brian-eschbach.com",
      role: "project manager",
    },
    {
      name: "moby eric",
      email: "moby@moby-eric.com",
      role: "submitter",
    },
    {
      name: "jimmy jones",
      email: "jimmy@jimmy-jones.com",
      role: "developer",
    },
    {
      name: "trevor strnad",
      email: "trevor@trevor-strnad.com",
      role: "project manager",
    },
    {
      name: "brian eschbach",
      email: "brian@brian-eschbach.com",
      role: "project manager",
    },
  ];

  return (
    <div className={styles.main}>
      {/* <LoginButton /> */}
      {/* <TicketTable /> */}
      <div className={styles.users}>
        <AssignmentCard
          rows={users}
          selection={"user"}
          color={"red"}
          title={"select 1 or more users"}
        />
      </div>
      <div className={styles.roles}>
        <AssignmentCard
          rows={roles}
          selection={"role"}
          color={"blue"}
          title={"select role to assign"}
        />
      </div>
      <div className={styles.personnel}>
        <AssignmentCard
          rows={personnel}
          selection={"person"}
          color={"green"}
          title={"your personnel"}
        />
        <button className={styles.assign}>assign</button>
      </div>
    </div>
  );
};

export default ManageRoles;
