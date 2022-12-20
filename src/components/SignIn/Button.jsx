import React from "react";
import styles from "./Button.module.css"
const Button = (props) => {

    let gradient = props.color

    return (
        <button className={`${styles.button} ${styles[gradient]}`}>
            {props.title}
        </button>
    )

}

export default Button;