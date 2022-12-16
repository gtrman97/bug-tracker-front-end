import React from "react";
import styles from './Tickets.module.css';
import TicketTable from './TicketTable'

const Tickets = () => {

    return (
        <div className={styles.tickets}>
            <TicketTable color={'red'} header={'not started'}/>
            <TicketTable color={'blue'} header={'in progress'}/>
            <TicketTable color={'green'} header={'completed'}/>
        </div>
    )

}

export default Tickets;