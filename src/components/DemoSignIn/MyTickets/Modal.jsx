import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {

  let newTicketTime, newAssignee;
  const toggleModal = props.onToggleModal;
  const createTicket = props.onCreateTicket;

  const timeChangeHandler = (event) => {
    newTicketTime = event.target.value;
  };

  const assigneeChangeHandler = (event) => {
    newAssignee = event.target.value;
  };

  const newTicketHandler = () => {
    createTicket(newAssignee, newTicketTime);
  };

  return (
    <>
      <div className={styles.modal}>
        <div onClick={toggleModal} className={styles["overlay"]}></div>
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-header"]}>new ticket</h2>
          <form className={styles["ticket-form"]}>
            <div className={styles["form-element"]}>
              <label htmlFor="description">description</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                cols="30"
              ></textarea>
            </div>
            <div className={styles["form-element"]}>
              <label htmlFor="assignee">assignee</label>
              <select className={styles.developers}>
                <option value="trevor strnad" onClick={assigneeChangeHandler}>
                  Trevor Strnad
                </option>
                <option value="brian eschbach" onClick={assigneeChangeHandler}>
                  Brian Eschbach
                </option>
                <option value="ryan knight" onClick={assigneeChangeHandler}>
                  Ryan Knight
                </option>
              </select>
            </div>
            <div className={styles["form-element"]}>
              <label htmlFor="time">time</label>
              <input id="time" name="time" onChange={timeChangeHandler} />
            </div>
          </form>
          <button className={styles["close-modal"]} onClick={toggleModal}>
            X
          </button>
          <button
            className={styles["create-ticket"]}
            onClick={newTicketHandler}
          >
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
