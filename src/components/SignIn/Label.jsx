import React from "react";
import styles from './Label.module.css'

const Label = (props) => {

  let title = props.title;

  return (
    <div className={styles["input-group"]}>
      <label htmlFor={title}></label>
      <input type="text" id={title} name={title} placeholder={title}/>
    </div>
  );
};

export default Label;
