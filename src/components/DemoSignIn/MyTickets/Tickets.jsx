import React from "react";
import { useState } from "react";
import styles from "./Tickets.module.css";
import TicketTable from "./TicketTable";
import Modal from "./Modal";

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
    { task: "task 13", assignee: "n8 feet under", time: "1h" },
    { task: "task 16", assignee: "n8 feet under", time: "1h" },
  ];

  const [tickets, setTickets] = useState(inProgressTickets);
  const [modal, setModal] = useState(false);
  const [assignee, setAssignee] = useState();
  const [time, setTime] = useState();

  const createTicket = (task, time, assignee) => {
    
    setTickets((oldTickets) => [
      ...oldTickets,
      { task: task, assignee: assignee, time: time },
    ]);
    toggleModal();

  }

  const toggleTickets = () => {
    setTickets((oldTickets) => [
      ...oldTickets,
      { task: "task 1", assignee: "poopy poops", time: "1h" },
    ]);
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
        <button onClick={toggleTickets}>pooppy poops</button>
        <button onClick={toggleModal} className={styles.button}>
          create ticket
        </button>
      </div>
      <div className={styles.tickets}>
        {modal && <Modal onToggleModal={toggleModal} onCreateTicket={createTicket}/>}
        <TicketTable color={"red"} header={"not started"} tickets={tickets} />
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
    </>
  );
};

export default Tickets;
