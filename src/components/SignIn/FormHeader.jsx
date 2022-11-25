import React from "react";
import styles from './FormHeader.module.css';

const FormHeader = (props) => {

    return (
        <div className={styles.header}>
            <div className={styles.gradient}>
                <h4>{props.title}</h4>
            </div>
        </div>
    )

};

export default FormHeader; 