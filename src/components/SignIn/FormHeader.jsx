import React from "react";
import styles from "./FormHeader.module.css";

const FormHeader = (props) => {

  const { title } = props;

  const main = props.type;

  return (
    <div className={main ? styles['main-header'] : styles.header}>
      <div className={styles.gradient}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default FormHeader;
