import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {

  console.log(`status is index ${props.status}`);

  let newTicketTime, newAssignee;
  const toggleModal = props.onToggleModal;
  const createTicket = props.onCreateTicket;
  const deleteTicket = props.onDeleteTicket;

  const timeChangeHandler = (event) => {
    newTicketTime = event.target.value;
    console.log(`new time is ${newTicketTime}`);
  };

  const assigneeChangeHandler = (event) => {
    // it's not target.value for some reason here
    newAssignee = event.target.text;
    console.log(event.target.text);
  };

  const newTicketHandler = () => {
    createTicket(newAssignee, newTicketTime);
  };

  const edit = props.title.startsWith("e");

  const statuses = props.statuses;

  let devs = props.devs;
  newAssignee = devs[0].assignee;

  const capitalize = (dev) => {
    dev = dev.split(" ");
    let [first, last] = dev;
    dev =
      first.charAt(0).toUpperCase() +
      first.slice(1) +
      " " +
      last.charAt(0).toUpperCase() +
      last.slice(1);
    return dev;
  };

  devs = devs.map((dev) => capitalize(dev.assignee));

  // I have to assign it to a new variable here
  // to capitalize because the incoming props.dev is read only
  let assignee;

  if (edit) {
    assignee = props.dev;
    assignee = capitalize(assignee);
  }

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
              >
                {edit ? `This is a desciption for ticket number ${props.id}` : null}
              </textarea>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="assignee">
                priority
              </label>
              <select className={styles.priorities}>
                {statuses.map((priority, i) => (
                  <option value={priority} selected={edit && props.status === i ? "selected" : null}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="type">
                ticket type
              </label>
              <div className={styles["radio-buttons"]}>
                bug
                <input
                  id="type"
                  name="type"
                  type="radio"
                  defaultChecked={edit ? "checked" : null}
                />
                feature
                <input id="type" name="type" type="radio" />
              </div>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="assignee">
                assignee
              </label>
              <select className={styles.developers}>
                {devs.map((dev) => (
                  <option
                    value={`${dev.assignee}`}
                    onClick={assigneeChangeHandler}
                    selected={assignee === dev ? "selected" : null}
                  >
                    {dev}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles["form-element"]}>
              <label className={styles["form-label"]} htmlFor="time">
                time
              </label>
              <input
                id="time"
                name="time"
                value={props.time}
                onChange={timeChangeHandler}
              />
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
                <button className={styles["save-ticket"]}>
                  {props.buttonText}
                </button>
                <button className={styles["delete-ticket"]} onClick={deleteTicket}>delete</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
