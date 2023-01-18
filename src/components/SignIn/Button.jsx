import React from "react";
import styles from "./Button.module.css"
const Button = (props) => {

    const {color, title} = props;

    return (
        <button className={`${styles.button} ${styles[color]}`}>
            {title}
        </button>
    )

}

export default Button;