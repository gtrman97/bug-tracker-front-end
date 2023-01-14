import React from "react";
import styles from './ModalTemplate.module.css';

const ModalTemplate = (props) => {

    const toggleModal = props.onToggleModalHandler;
    const {content} = props;

  return (
    <>
      <div className={styles.modal}>
        <div onClick={toggleModal} className={styles["overlay"]}></div>
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-header"]}>{'header'}</h2>
          {content}
          <button className={styles["close-modal"]} onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalTemplate;
