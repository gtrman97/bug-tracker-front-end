import React from "react";
import User from "./User";
import styles from './AssignmentCard.module.css';

const AssignmentCard = (props) => {

    const users = props.users;

    const toggleUserSelection = (event) => {

        event.target.classlist.toggle('selected-user');
    }

  return (
    <div className={styles.col}>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <div className={styles.gradient}>
            <h6 className={styles.title}>{props.title}select 1 or more users</h6>
          </div>
        </div>
        <div className={styles["card-body"]}>
          <div className={styles["table-responsive"]}>
            <table className={styles.table}>
              <tbody className={styles['table-body']}>
              {users ? users.map((user) => <User user={user} />) : null}
                {/* <tr className={styles["user-selection"]} onClick={(e) => {e.target.classList.toggle(styles['selected-user'])}}>
                  <td className={styles['table-data']}>
                    <h6 className={styles.user}>john michael</h6>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
