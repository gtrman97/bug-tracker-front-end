import React from "react";
import styles from "./TicketTable.module.css";
import Ticket from "./Ticket";

const TicketTable = (props) => {

  let tickets = props.tickets;

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
                <th className={styles['header-col']}>task</th>
                <th className={styles['header-col']}>assignee</th>
                <th className={styles['header-col']}>time</th>
              </tr>
            </thead>
            <tbody className={styles['table-list']}>
              {tickets ? tickets.map((ticket) => <Ticket ticket={ticket}/>) : null}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
