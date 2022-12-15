import React from "react";
import styles from './Tickets.module.css';
import TicketTable from './TicketTable'

const Tickets = () => {

    return (
        <div className={styles.tickets}>
            <TicketTable />
            <TicketTable />
            <TicketTable />
        </div>
    )

}

export default Tickets;