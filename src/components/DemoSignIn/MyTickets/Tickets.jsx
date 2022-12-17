import React from "react";
import styles from "./Tickets.module.css";
import TicketTable from "./TicketTable";

const Tickets = () => {
  let inProgressTickets = [
    { task: "task 1", assignee: "trevor strnad", time: "1h" },
    { task: "task 2", assignee: "brian eschbach", time: "1h" },
    { task: "task 3", assignee: "shannon lucas", time: "1h" },
    { task: "task 4", assignee: "ryan knight", time: "1h" },
    { task: "task 5", assignee: "brandon ellis", time: "1h" },
    { task: "task 6", assignee: "brandon ellis", time: "1h" },
    { task: "task 7", assignee: "ryan knight", time: "1h" },
    { task: "task 8", assignee: "shannon lucas", time: "1h" },
    { task: "task 9", assignee: "brian eschbach", time: "1h" },
    { task: "task 10", assignee: "trevor strnad", time: "1h" },
    { task: "task 11", assignee: "n8 feet under ", time: "1h" },
    { task: "task 12", assignee: "n8 feet under", time: "1h" },
  ];

  return (
    <div className={styles.tickets}>
      <TicketTable
        color={"red"}
        header={"not started"}
        tickets={inProgressTickets}
      />
      <TicketTable
        color={"blue"}
        header={"in progress"}
        tickets={inProgressTickets}
      />
      <TicketTable
        color={"green"}
        header={"completed"}
        tickets={inProgressTickets}
      />
    </div>
  );
};

export default Tickets;
