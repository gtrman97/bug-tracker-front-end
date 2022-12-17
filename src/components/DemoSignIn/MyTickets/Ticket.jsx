import React from "react";
import styles from './Ticket.module.css';

const Ticket = (props) => {
    return (
        <tr className={styles.ticket}>
            <td className={styles['ticket-col']}>{props.ticket.task}</td>
            <td className={styles['ticket-col']}>{props.ticket.assignee}</td>
            <td className={styles['ticket-col']}>{props.ticket.time}</td>
        </tr>
    )
}

export default Ticket;