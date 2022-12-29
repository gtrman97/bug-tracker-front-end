import React from "react";
import styles from "./Ticket.module.css";

const Ticket = (props) => {

  let toggleModal = props.onToggleModal;

  const eventToggle = () => {
    // console.log(event.target.innerText);
    toggleModal(props);
  }

  return (
    <tr className={styles.ticket} onClick={eventToggle}>
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
