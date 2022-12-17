import React from "react";
import styles from './Ticket.module.css';

const Ticket = (props) => {
    return (
        <tr className={styles.ticket}>
            <td className={styles['ticket-col']}>{props.task}</td>
            <td className={styles['ticket-col']}>{props.assignee}</td>
            <td className={styles['ticket-col']}>{props.time}</td>
        </tr>
    )
}

export default Ticket;