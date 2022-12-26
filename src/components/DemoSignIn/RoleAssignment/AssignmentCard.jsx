import { React, useState } from "react";
import User from "./User";
import styles from "./AssignmentCard.module.css";

const AssignmentCard = (props) => {
  const header = props.selection === "person" ? true : false;

  let selectedRoles;

  const roleHandler = (selected) => {
    selectedRoles = new Array(4).fill(false);
    for(let role of selectedRoles){

    }
    setRoles(selectedRoles);
  };

  const [roles, setRoles] = useState();

  const rows = props.rows;

  if (props.selection === "person") {
    console.log("rendering personnel");
  }

  return (
    <>
      <div className={styles.col}>
        <div className={`${styles[`${props.selection}-card`]} ${styles.card}`}>
          <div className={styles["card-header"]}>
            <div
              className={`${styles[`${props.color}-gradient`]} ${
                styles.gradient
              }`}
            >
              <h6 className={styles.title}>{props.title}</h6>
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
                  {rows.map((user) => (
                    <User
                      user={user}
                      color={props.color}
                      selection={props.selection}
                      selectionChangeHandler={props.selectionChangeHandler}
                      getUser={props.getUser}
                      getRole={props.getRole}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentCard;
