import React from "react";
import styles from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  const toggleModal = props.onToggleModal;

  return (
    <>
      <div className={styles.modal}>
        <div onClick={toggleModal} className={styles["overlay"]}></div>
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-header"]}>
            are you sure you want to delete?
          </h2>
          <button className={styles["close-modal"]} onClick={toggleModal}>
            X
          </button>
          <div className={styles.buttons}>
            <button className={styles["yes-button"]}>yes</button>
            <button className={styles["no-button"]} onClick={toggleModal}>
              no
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
