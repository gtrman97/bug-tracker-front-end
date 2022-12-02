import React from "react";
import styles from "./Card.module.css";
import clock from "../../../images/icons/clock.png";

const Card = (props) => {

  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <div className={`${styles[`${props.color}-gradient`]} ${styles.gradient}`}>
            <div className={styles.chart}>
              <canvas></canvas>
            </div>
          </div>
        </div>
        <div className={styles["card-body"]}>
          <h6 className={styles["card-title"]}>Tickets by {props.category}</h6>
          <hr />
          <div className={styles.updates}>
            <img src={clock} alt="clock" className={styles.clock} />
            <p className={styles.update}>Updated 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
