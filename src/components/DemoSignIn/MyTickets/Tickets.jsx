import React from "react";
import { useState } from "react";
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
    { task: "task 13", assignee: "n8 feet under", time: "1h" },
    { task: "task 16", assignee: "n8 feet under", time: "1h" },
  ];

  const [modal, setModal] = useState(false);

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
        <button
          onClick={toggleModal}
          className={`${styles[`btn-modal`]} ${styles.button}`}
        >
          create ticket
        </button>
      </div>
      <div className={styles.tickets}>
        {modal && (
          <div className={styles.modal}>
            <div onClick={toggleModal} className={styles["overlay"]}></div>
            <div className={styles["modal-content"]}>
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis suscipit officia recusandae, eveniet
                quaerat assumenda id fugit, dignissimos maxime non natus placeat
                illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur
                possimus quaerat ipsum quos molestiae rem aspernatur dicta
                tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className={styles["close-modal"]} onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
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
    </>
  );
};

export default Tickets;
