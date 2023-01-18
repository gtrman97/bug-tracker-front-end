import { React, useState } from "react";
import User from "./User";
import styles from "./AssignmentCard.module.css";

const AssignmentCard = (props) => {

  const {
    selection,
    color,
    title,
    getPersonMap,
    getUsers,
    getRole,
    selectionChangeHandler,
    toggleUser,
    toggleRole,
  } = props;

  const header = selection === "person" ? true : false;

  const [selectedRole, setSelectedRoles] = useState(-1);

  const getIndex = (index) => {
    if (index === null) console.log("you have not chosen a role");
    else {
      console.log(`you have chosen role ${index}`);
      setSelectedRoles(index);
    }
  };

  const [rows, setRows] = useState(props.rows);

  const changeRoles = () => {
    const personMap = getPersonMap();
    const users = getUsers();
    const role = getRole();
    if (role) {
      for (let user of users) {
        console.log(`user is ${user}`);
        personMap[user] = role;
        for (let person of rows) {
          if (person.name === user) {
            person.role = role;
          }
        }
      }
    }
    setRows(Array.from(rows));
  };

  return (
    <>
      <div className={styles.col}>
        <div className={`${styles[`${selection}-card`]} ${styles.card}`}>
          <div className={styles["card-header"]}>
            <div
              className={`${styles[`${color}-gradient`]} ${styles.gradient}`}
            >
              <h6 className={styles.title}>{title}</h6>
            </div>
          </div>
          {header ? (
            <thead>
              <tr className={styles["table-header"]}>
                <th className={styles["header-col"]}>name</th>
                <th className={styles["header-col"]}>email</th>
                <th className={styles["header-col"]}>role</th>
              </tr>
            </thead>
          ) : null}
          <div className={styles["card-body"]}>
            <div className={styles["table-responsive"]}>
              <table className={header ? styles[`person-table`] : styles.table}>
                <tbody className={styles["table-body"]}>
                  {rows.map((user, i) => (
                    <User
                      user={user}
                      index={i}
                      color={color}
                      selection={selection}
                      selectionChangeHandler={selectionChangeHandler}
                      toggleUser={toggleUser}
                      toggleRole={toggleRole}
                      indexChangeHandler={getIndex}
                      selectedIndex={selectedRole}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {header ? (
        <button className={styles.assign} onClick={changeRoles}>
          assign
        </button>
      ) : null}
    </>
  );
};

export default AssignmentCard;
