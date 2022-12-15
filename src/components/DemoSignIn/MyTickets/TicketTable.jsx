import React from "react";
import styles from "./TicketTable.module.css";

const TicketTable = (props) => {
  return (
    <div className={styles.table}>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles["card-header"]}>
            <div
              className={`${styles[`${props.color}-gradient`]} ${
                styles.gradient
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
