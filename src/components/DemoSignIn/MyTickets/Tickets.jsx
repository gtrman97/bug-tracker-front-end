import React from "react";
import { useState } from "react";
import styles from "./Tickets.module.css";
import TicketTable from "./TicketTable";
import Modal from "./Modal";
import DeleteModal from "../MyProjects/DeleteModal";

const Tickets = () => {
  const notStartedTickets = [
    { id: 1, assignee: "trevor strnad", time: "1h" },
    { id: 2, assignee: "brian eschbach", time: "45m" },
    { id: 3, assignee: "shannon lucas", time: "1h" },
    { id: 4, assignee: "ryan knight", time: "1h" },
    { id: 5, assignee: "brandon ellis", time: "30m" },
    { id: 6, assignee: "vinnie moore", time: "1.5h" },
    { id: 7, assignee: "jose silva", time: "2d" },
    { id: 8, assignee: "napoleon hill", time: "2d" },
    { id: 9, assignee: "lawrence perry", time: "1h" },
    { id: 10, assignee: "john mcDougall ", time: "1h" },
  ];
  const inProgressTickets = [
    { id: 11, assignee: "mark morton", time: "1h" },
    { id: 12, assignee: "ryan knight", time: "40m" },
    { id: 13, assignee: "john michael", time: "50m" },
    { id: 14, assignee: "jimmy jones", time: "1h" },
    { id: 15, assignee: "jack allen", time: "1h" },
  ];
  const completedTickets = [
    { id: 16, assignee: "nathan thunderstone ", time: "1h" },
    { id: 17, assignee: "marcus aurelius", time: "2h" },
    { id: 18, assignee: "john smith", time: "1h" },
    { id: 19, assignee: "brian holt", time: "50m" },
    { id: 20, assignee: "shad helmstetter", time: "30m" },
  ];

  const globalTickets = {
    "not started": [
      { id: 1, assignee: "trevor strnad", time: "1h" },
      { id: 2, assignee: "brian eschbach", time: "45m" },
      { id: 3, assignee: "shannon lucas", time: "1h" },
      { id: 4, assignee: "ryan knight", time: "1h" },
      { id: 5, assignee: "brandon ellis", time: "30m" },
      { id: 6, assignee: "vinnie moore", time: "90m" },
      { id: 7, assignee: "jose silva", time: "2d" },
      { id: 8, assignee: "napoleon hill", time: "2d" },
      { id: 9, assignee: "lawrence perry", time: "1h" },
      { id: 10, assignee: "john mcDougall ", time: "1h" },
    ],
    "in progress": [
      { id: 11, assignee: "mark morton", time: "1h" },
      { id: 12, assignee: "ryan knight", time: "1h" },
      { id: 13, assignee: "john michael", time: "1h" },
      { id: 14, assignee: "jimmy jones", time: "1h" },
      { id: 15, assignee: "jack allen", time: "1h" },
    ],
    completed: [
      { id: 16, assignee: "nathan thunderstone ", time: "1h" },
      { id: 17, assignee: "marcus aurelius", time: "1h" },
      { id: 18, assignee: "john smith", time: "1h" },
      { id: 19, assignee: "brian holt", time: "50m" },
      { id: 20, assignee: "shad helmstetter", time: "30m" },
    ],
  };

  const statuses = ["none", "low", "medium", "high"];

  // since I am using the spread operator here which makes a shallow copy,
  // I don't need to use the slice() method in the shuffleTickets method
  const allTickets = [
    [...notStartedTickets],
    [...inProgressTickets],
    [...completedTickets],
  ];

  const [tickets, setTickets] = useState(notStartedTickets);
  const [createTicketModal, setCreateTicketModal] = useState(false);
  const [editTicketModal, setEditTicketModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);

  // const [modal, setModal] = useState(false);

  const devs = [...notStartedTickets.map((ticket) => ticket.assignee)];

  const createTicket = (newAssignee = devs[0], newTime) => {
    const ticketId =
      notStartedTickets.length +
      inProgressTickets.length +
      completedTickets.length +
      1;
    setShuffledNewTickets((oldTickets) => [
      ...oldTickets,
      { id: ticketId, assignee: newAssignee, time: newTime },
    ]);
    setCreateTicketModal(!createTicketModal);
  };

  const deleteTicket = () => {
    setDeleteProjectModal(!deleteProjectModal);
    setEditTicketModal(!editTicketModal);
  }

  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [dev, setDev] = useState();
  const [time, setTime] = useState();

  const toggleNewTicketModal = () => {
    setCreateTicketModal(!createTicketModal);
  };

  const toggleEditTicketModal = (props) => {
    if (props.ticket) {
      console.log(
        `id: ${props.ticket.id}, dev: ${props.ticket.assignee}, time: ${props.ticket.time}`
      );
      setId(props.ticket.id);
      setStatus(Math.floor(Math.random() * 4));
      setDev(props.ticket.assignee);
      setTime(props.ticket.time);
    }
    setEditTicketModal(!editTicketModal);
  };

  if (editTicketModal || createTicketModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [shuffledNewTickets, setShuffledNewTickets] =
    useState(notStartedTickets);
  const [shuffledStartedTickets, setShuffledStartedTickets] =
    useState(inProgressTickets);
  const [shuffledDoneTickets, setShuffledDoneTickets] =
    useState(completedTickets);

  const shuffleTickets = () => {
    allTickets.sort((a, b) => Math.random() - 0.5);

    setShuffledNewTickets(allTickets[0].sort((a, b) => Math.random() - 0.5));
    setShuffledStartedTickets(
      allTickets[1].sort((a, b) => Math.random() - 0.5)
    );
    setShuffledDoneTickets(allTickets[2].sort((a, b) => Math.random() - 0.5));
  };

  return (
    <>
      <div className={styles.create}>
        <select className={styles.projects} onChange={shuffleTickets}>
          <option value="project 1">Project 1</option>
          <option value="project 2">Project 2</option>
          <option value="project 3">Project 3</option>
          <option value="project 4">Project 4</option>
        </select>
        <button onClick={toggleNewTicketModal} className={styles.button}>
          create ticket
        </button>
      </div>
      <div className={styles.tickets}>
        {editTicketModal ? (
          <Modal
            onToggleModal={toggleEditTicketModal}
            onDeleteTicket={deleteTicket}
            title={"edit ticket"}
            buttonText={"save"}
            id={id}
            devs={[
              ...notStartedTickets,
              ...inProgressTickets,
              ...completedTickets,
            ]}
            statuses={statuses}
            status={status}
            dev={dev}
            time={time}
          />
        ) : createTicketModal ? (
          <Modal
            onToggleModal={toggleNewTicketModal}
            onCreateTicket={createTicket}
            title={"new ticket"}
            buttonText={"create"}
            devs={[
              ...notStartedTickets,
              ...inProgressTickets,
              ...completedTickets,
            ]}
            statuses={statuses}
          />
        ) : deleteProjectModal ? (
          <DeleteModal onToggleModal={deleteTicket}/>
        ) : null}
        <TicketTable
          color={"red"}
          header={"not started"}
          tickets={shuffledNewTickets}
          onToggleModal={toggleEditTicketModal}
        />
        <TicketTable
          color={"blue"}
          header={"in progress"}
          tickets={shuffledStartedTickets}
          onToggleModal={toggleEditTicketModal}
        />
        <TicketTable
          color={"green"}
          header={"completed"}
          tickets={shuffledDoneTickets}
          onToggleModal={toggleEditTicketModal}
        />
      </div>
    </>
  );
};

export default Tickets;
