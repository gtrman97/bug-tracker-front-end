import React from "react";
import styles from './Ticket.module.css';

const Ticket = (props) => {
    return (
        <tr className={styles.ticket}>
            <td className={styles['ticket-col']}>task 1</td>
            <td className={styles['ticket-col']}>trevor strnad</td>
            <td className={styles['ticket-col']}>1h</td>
        </tr>
    )
}

export default Ticket;