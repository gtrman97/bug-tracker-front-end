import React from "react";
import styles from "./RoleAssignment.module.css";
// import LoginButton from "../../LoginButton";
import AssignmentCard from "./AssignmentCard";

const ManageRoles = () => {
  const users = [
    "trevor strnad",
    "brian eschbach",
    "shannon lucas",
    "ryan knight",
    "brandon ellis",
    "vinnie moore",
    "jose silva",
    "napoleon hill",
    "lawrence perry",
    "john mcDougall",
    "mark morton",
    "john michael",
    "jimmy jones",
    "jack allen",
    "nathan thunderstone",
    "marcus aurelius",
    "john smith",
    "brian holt",
    "shad helmstetter"
  ];

  const roles = ["admin", "project manager", "developer", "submitter"];

  const personnel = [
    {
      name: "trevor strnad",
      email: "trevor@strnad.com",
      role: "project manager",
    },
    {
      name: "brandon ellis",
      email: "brandon@ellis.com",
      role: "project manager",
    },
    {
      name: "ryan knight",
      email: "ryan@knight.com",
      role: "developer",
    },
    {
      name: "brian eschbach",
      email: "brian@eschbach.com",
      role: "project manager",
    },
    {
      name: "shannon lucas",
      email: "shannon@lucas.com",
      role: "submitter",
    },
    {
      name: "lawrence perry",
      email: "lawrence@perry.com",
      role: "submitter",
    },
    {
      name: "napoleon hill",
      email: "napoleon@hill.com",
      role: "project manager",
    },
    {
      name: "jose silva",
      email: "jose@silva.com",
      role: "project manager",
    },
    {
      name: "vinnie moore",
      email: "vinnie@moore.com",
      role: "submitter",
    },
    {
      name: "jimmy jones",
      email: "jimmy@jones.com",
      role: "developer",
    },
    {
      name: "john michael",
      email: "john@michael.com",
      role: "submitter",
    },
    {
      name: "shad helmstetter",
      email: "shad@helmstetter.com",
      role: "developer",
    },
    {
      name: "trevor strnad",
      email: "trevor@strnad.com",
      role: "project manager",
    },
    {
      name: "brian eschbach",
      email: "brian@eschbach.com",
      role: "project manager",
    },
    {
      name: "richard gran",
      email: "richard@gran.com",
      role: "project manager",
    },
    {
      name: "moby eric",
      email: "moby@eric.com",
      role: "submitter",
    },
    {
      name: "jimmy jones",
      email: "jimmy@jones.com",
      role: "developer",
    },
    {
      name: "trevor strnad",
      email: "trevor@strnad.com",
      role: "project manager",
    },
    {
      name: "brian eschbach",
      email: "brian@eschbach.com",
      role: "project manager",
    },
    {
      name: "moby eric",
      email: "moby@eric.com",
      role: "submitter",
    },
    {
      name: "jimmy jones",
      email: "jimmy@jones.com",
      role: "developer",
    },
    {
      name: "trevor strnad",
      email: "trevor@strnad.com",
      role: "project manager",
    },
    {
      name: "brian eschbach",
      email: "brian@eschbach.com",
      role: "project manager",
    },
  ];

  const personMap = {};
  for (let person of personnel) {
    personMap[person.name] = person.role;
  }

  const getPersonMap = () => {
    return personMap;
  }

  const selectedUsers = [];
  const toggleUser = (user) => {
    user = user.toLowerCase();
    if (!selectedUsers.includes(user)) {
      selectedUsers.push(user);
    } else {
      selectedUsers.splice(selectedUsers.indexOf(user), 1);
    }
    console.log(selectedUsers);
  };
  const getUsers = () => {
    return selectedUsers;
  }
  let selectedRole;
  const toggleRole = (role) => {
    if (role === null) console.log("you have not chosen a role");
    else {
      selectedRole = role;
      console.log(`you have chosen role ${role}`);
    }
  };
  const getRole = () => {
    return selectedRole;
  }

  const setRole = () => {
    console.log(`selectedUsers is ${selectedUsers} and selectedRole is ${selectedRole}`);
    if (selectedRole) {
      // console.log(`receiving users: ${selectedUsers}`);
      for (let user of selectedUsers) {
        console.log(`user is ${user}`);
        personMap[user] = selectedRole;
        for (let person of personnel) {
          if (person.name === user) {
            person.role = selectedRole;
            console.log(`changed ${selectedUsers} to ${selectedRole}`);
          }
        }
      }
    }
  };

  return (
    <div className={styles.main}>
      {/* <LoginButton /> */}
      <div className={styles.users}>
        <AssignmentCard
          rows={users}
          selection={"user"}
          color={"red"}
          title={"select 1 or more users"}
          toggleUser={toggleUser}
        />
      </div>
      <div className={styles.roles}>
        <AssignmentCard
          rows={roles}
          selection={"role"}
          color={"blue"}
          title={"select role to assign"}
          toggleRole={toggleRole}
        />
      </div>
      <div className={styles.personnel}>
        <AssignmentCard
          rows={personnel}
          getPersonMap={getPersonMap}
          selection={"person"}
          color={"green"}
          title={"your personnel"}
          getUsers={getUsers}
          getRole={getRole}
        />
      </div>
    </div>
  );
};

export default ManageRoles;
