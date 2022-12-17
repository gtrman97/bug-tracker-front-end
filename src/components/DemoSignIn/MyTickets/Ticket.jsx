import React from "react";
import styles from "./Ticket.module.css";

const Ticket = (props) => {
  return (
    <tr className={styles.ticket}>
      <td className={styles["ticket-col"]}>
        <div>
        {props.ticket.task}
        </div>
        </td>
      <td className={styles["ticket-col"]}>
        <div>
        {props.ticket.assignee}
        </div>
        </td>
      <td className={styles["ticket-col"]}>
        <div>
        {props.ticket.time}
        </div>
        </td>
    </tr>
  );
};

export default Ticket;
