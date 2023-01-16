import React from "react";
import styles from "./Delete.module.css";

const DeleteModal = (props) => {

    const toggleModal = props.onToggleModalHandler;

  return (
    <>
      <div className={styles.buttons}>
        <button className={styles["yes-button"]}>yes</button>
        <button className={styles["no-button"]} onClick={toggleModal}>
          no
        </button>
      </div>
    </>
  );
};

export default DeleteModal;
