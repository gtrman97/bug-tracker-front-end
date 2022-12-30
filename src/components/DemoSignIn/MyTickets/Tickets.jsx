import React from "react";
import { useState } from "react";
import styles from "./Tickets.module.css";
import TicketTable from "./TicketTable";
import Modal from "./Modal";

const Tickets = () => {
  const notStartedTickets = [
    { id: 1, assignee: "trevor strnad", time: "1h" },
    { id: 2, assignee: "brian eschbach", time: "45m" },
    { id: 3, assignee: "shannon lucas", time: "1h" },
    { id: 4, assignee: "ryan knight", time: "1h" },
    { id: 5, assignee: "brandon ellis", time: "30m" },
    { id: 6, assignee: "ryan knight", time: "90m" },
    { id: 7, assignee: "shannon lucas", time: "2d" },
    { id: 8, assignee: "brian eschbach", time: "2d" },
    { id: 9, assignee: "trevor strnad", time: "1h" },
    { id: 10, assignee: "n8 feet under ", time: "1h" },
  ];
  const inProgressTickets = [
    { id: 11, assignee: "n8 feet under ", time: "1h" },
    { id: 12, assignee: "ryan knight", time: "1h" },
    { id: 13, assignee: "shannon lucas", time: "1h" },
    { id: 14, assignee: "brian eschbach", time: "1h" },
    { id: 15, assignee: "trevor strnad", time: "1h" },
  ];
  const completedTickets = [
    { id: 16, assignee: "n8 feet under ", time: "1h" },
    { id: 17, assignee: "ryan knight", time: "1h" },
    { id: 18, assignee: "trevor strnad", time: "1h" },
  ];

  const [tickets, setTickets] = useState(notStartedTickets);
  const [editTicketModal, setEditTicketModal] = useState(false);
  const [createTicketModal, setCreateTicketModal] = useState(false);
  // const [modal, setModal] = useState(false);

  let devs = notStartedTickets.map((x) => x.assignee);

  const createTicket = (newAssignee = devs[0], newTime) => {
    let ticketId =
      tickets.length + inProgressTickets.length + completedTickets.length;
    setTickets((oldTickets) => [
      ...oldTickets,
      { id: ticketId, assignee: newAssignee, time: newTime },
    ]);
    setCreateTicketModal(!createTicketModal);
  };

  const toggleNewTicketModal = () => {
    setCreateTicketModal(!createTicketModal);
  }

  const toggleEditTicketModal = (props) => {
    if(props.ticket){
      console.log(`id: ${props.ticket.id}, dev: ${props.ticket.assignee}, time: ${props.ticket.time}`);
    }
    setEditTicketModal(!editTicketModal);
  }

  if (editTicketModal || createTicketModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [shuffledNewTickets, setShuffledNewTickets] = useState(notStartedTickets);
  const [shuffledStartedTickets, setShuffledStartedTickets] = useState(inProgressTickets);
  const [shuffledDoneTickets, setShuffledDoneTickets] = useState(completedTickets);

  const shuffleTickets = () => {

    // using slice here so it only mutates a coppy of the array not the original
    setShuffledNewTickets(shuffledNewTickets.slice().sort((a, b) => Math.random() - 0.5));
    setShuffledStartedTickets(shuffledStartedTickets.slice().sort((a, b) => Math.random() - 0.5));
    setShuffledDoneTickets(shuffledDoneTickets.slice().sort((a, b) => Math.random() - 0.5));

  }
  // notStartedTickets.sort((a, b) => Math.random() - 0.5);

  return (
    <>
      <div className={styles.create}>
        <select className={styles.projects}>
          <option value="project 1" onClick={shuffleTickets}>Project 1</option>
          <option value="project 2" onClick={shuffleTickets}>Project 2</option>
          <option value="project 3" onClick={shuffleTickets}>Project 3</option>
          <option value="project 4" onClick={shuffleTickets}>Project 4</option>
        </select>
        <button onClick={toggleNewTicketModal} className={styles.button}>
          create ticket
        </button>
      </div>
      <div className={styles.tickets}>
        {editTicketModal ? 
          <Modal onToggleModal={toggleEditTicketModal} onCreateTicket={createTicket} title={'edit ticket'}/>
        : createTicketModal ? 
        <Modal onToggleModal={toggleNewTicketModal} onCreateTicket={createTicket} title={'new ticket'} />
        : null
        }
        {/* {modal && (
          <Modal onToggleModal={toggleModal} onCreateTicket={createTicket} title={title}/>
        )} */}
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
