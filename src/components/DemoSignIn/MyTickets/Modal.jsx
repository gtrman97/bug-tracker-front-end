import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  let newTicketTime, newAssignee;
  const toggleModal = props.onToggleModal;
  const createTicket = props.onCreateTicket;

  const timeChangeHandler = (event) => {
    newTicketTime = event.target.value;
    console.log(`new time is ${newTicketTime}`);
  };

  const assigneeChangeHandler = (event) => {
    newAssignee = event.target.value;
    console.log(newAssignee);
  };

  const newTicketHandler = () => {
    createTicket(newAssignee, newTicketTime);
  };

  const edit = props.title.startsWith("e");

  return (
    <>
      <div className={styles.modal}>
        <div onClick={toggleModal} className={styles["overlay"]}></div>
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-header"]}>{props.title}</h2>
          <form className={styles["ticket-form"]}>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="description">
                description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                cols="26"
              ></textarea>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="assignee">
                priority
              </label>
              <select className={styles.priorities}>
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="type">
                ticket type
              </label>
              <div className={styles["radio-buttons"]}>
                bug
                <input id="type" name="type" type={"radio"} />
                feature
                <input id="type" name="type" type={"radio"} />
              </div>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="assignee">
                assignee
              </label>
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
              <label className={styles["form-label"]} htmlFor="time">
                time
              </label>
              <input id="time" name="time" onChange={timeChangeHandler} />
            </div>
          </form>
          <button className={styles["close-modal"]} onClick={toggleModal}>
            X
          </button>
          <div className={styles.buttons}>
            {!edit ? (
              <button
              className={styles["save-ticket"]}
              onClick={newTicketHandler}
            >
              {props.buttonText}
            </button>
            ) : (
              <>
                <button
                  className={styles["save-ticket"]}
                >
                  {props.buttonText}
                </button>
                <button
                  className={styles["delete-ticket"]}
                >
                  delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
