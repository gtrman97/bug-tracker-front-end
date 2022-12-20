import React from "react";
import styles from './Modal.module.css';

const Modal = (props) => {

    const toggleModal = props.onToggleModal;

  return (
    <>
      <div className={styles.modal}>
        <div onClick={toggleModal} className={styles["overlay"]}></div>
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-header"]}>new ticket</h2>
          <form className={styles["ticket-form"]}>
            <div className={styles["form-element"]}>
              <label for="description">description</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                cols="30"
              ></textarea>
            </div>
            <div className={styles["form-element"]}>
              <label for="assignee">assignee</label>
              <select className={styles.developers}>
                <option value="trevor">Trevor</option>
                <option value="brian">Brian</option>
                <option value="ryan">Ryan</option>
              </select>
            </div>
            <div className={styles["form-element"]}>
              <label for="time">time</label>
              <input id="time" name="time" />
            </div>
          </form>
          <button className={styles["close-modal"]} onClick={toggleModal}>
            X
          </button>
          <button className={styles["create-ticket"]} onClick={toggleModal}>
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
