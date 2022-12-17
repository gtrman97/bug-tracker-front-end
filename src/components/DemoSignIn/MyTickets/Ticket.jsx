import React from "react";
import styles from './Ticket.module.css';

const Ticket = (props) => {
    return (
        <tr className={styles.ticket}>
            <td>task 1</td>
            <td>trevor strnad</td>
            <td>1h</td>
        </tr>
    )
}

export default Ticket;