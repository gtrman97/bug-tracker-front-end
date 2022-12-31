import React from "react";
import styles from "./TicketTable.module.css";
import Ticket from "./Ticket";

const TicketTable = (props) => {

  const tickets = props.tickets;

  let toggleModal = props.onToggleModal;

  const createTicket = props.createTicket;

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
                <th className={styles["header-col"]}>ID</th>
                <th className={styles["header-col"]}>assignee</th>
                <th className={styles["header-col"]}>time</th>
              </tr>
            </thead>
            <tbody className={styles["table-list"]}>
              {tickets
                ? tickets.map((ticket) => (
                    <Ticket ticket={ticket} onToggleModal={toggleModal} />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
