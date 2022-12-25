import React from "react";
import { useState } from "react";
import styles from "./Tickets.module.css";
import TicketTable from "./TicketTable";
import Modal from "./Modal";

const Tickets = () => {
  const notStartedTickets = [
    { task: 1, assignee: "trevor strnad", time: "1h" },
    { task: 2, assignee: "brian eschbach", time: "1h" },
    { task: 3, assignee: "shannon lucas", time: "1h" },
    { task: 4, assignee: "ryan knight", time: "1h" },
    { task: 5, assignee: "brandon ellis", time: "1h" },
    { task: 6, assignee: "ryan knight", time: "1h" },
    { task: 7, assignee: "shannon lucas", time: "1h" },
    { task: 8, assignee: "brian eschbach", time: "1h" },
    { task: 9, assignee: "trevor strnad", time: "1h" },
    { task: 10, assignee: "n8 feet under ", time: "1h" },
  ];
  const inProgressTickets = [
    { task: 11, assignee: "n8 feet under ", time: "1h" },
    { task: 12, assignee: "ryan knight", time: "1h" },
    { task: 13, assignee: "shannon lucas", time: "1h" },
    { task: 14, assignee: "brian eschbach", time: "1h" },
    { task: 15, assignee: "trevor strnad", time: "1h" },
  ];
  const completedTickets = [
    { task: 16, assignee: "n8 feet under ", time: "1h" },
    { task: 17, assignee: "ryan knight", time: "1h" },
    { task: 18, assignee: "trevor strnad", time: "1h" },
  ];

  const [tickets, setTickets] = useState(notStartedTickets);
  const [modal, setModal] = useState(false);

  let devs = notStartedTickets.map((x) => x.assignee);

  const createTicket = (newAssignee = devs[0], newTime) => {
    let ticketId =
      tickets.length + inProgressTickets.length + completedTickets.length;
    setTickets((oldTickets) => [
      ...oldTickets,
      { task: `task ${ticketId + 1}`, assignee: newAssignee, time: newTime },
    ]);
    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className={styles.create}>
        <select className={styles.projects}>
          <option value="project 1">Project 1</option>
          <option value="project 2">Project 2</option>
          <option value="project 3">Project 3</option>
          <option value="project 4">Project 4</option>
        </select>
        <button onClick={toggleModal} className={styles.button}>
          create ticket
        </button>
      </div>
      <div className={styles.tickets}>
        {modal && (
          <Modal onToggleModal={toggleModal} onCreateTicket={createTicket} />
        )}
        <TicketTable
          color={"red"}
          header={"not started"}
          tickets={tickets}
          onToggleModal={toggleModal}
        />
        <TicketTable
          color={"blue"}
          header={"in progress"}
          tickets={inProgressTickets}
          onToggleModal={toggleModal}
        />
        <TicketTable
          color={"green"}
          header={"completed"}
          tickets={completedTickets}
          onToggleModal={toggleModal}
        />
      </div>
    </>
  );
};

export default Tickets;
