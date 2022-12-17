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
                <th className={styles['header-col']}>task</th>
                <th className={styles['header-col']}>assignee</th>
                <th className={styles['header-col']}>time</th>
              </tr>
            </thead>
            <tbody className={styles['table-list']}>
                <Ticket task={'task 1'} assignee={'trevor strnad'} time={'1h'}/>
                <Ticket task={'task 2'} assignee={'brian eschbach'} time={'1h'}/>
                <Ticket task={'task 4'} assignee={'shannon lucas'} time={'1h'}/>
                <Ticket task={'task 5'} assignee={'ryan knight'} time={'1h'}/>
                <Ticket task={'task 6'} assignee={'brandon ellis'} time={'1h'}/>

              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
