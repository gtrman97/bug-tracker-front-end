import React from "react";
import styles from "./TicketTable.module.css";
import Ticket from "./Ticket";

const TicketTable = (props) => {
  return (
    <div className={styles.table}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div
            className={`${styles[`${props.color}-gradient`]} ${
              styles["card-header"]
            }`}
          >
            {props.header}
          </div>
          <table className={styles["ticket-table"]}>
            <thead>
              <tr className={styles["table-header"]}>
                <th>task</th>
                <th>assignee</th>
                <th>time</th>
              </tr>
            </thead>
            <tbody className={styles['table-list']}>
                <Ticket />
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
