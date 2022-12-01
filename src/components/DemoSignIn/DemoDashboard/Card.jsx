import React from "react";
import styles from './Card.module.css'

const Card = () => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles['card-header']}>
                    <div className={styles['primary-gradient']}>
                        <div className={styles.chart}>
                            <canvas></canvas>
                        </div>
                    </div>
                </div>
            <div className={styles['card-body']}></div>
            </div>

        </div>
    )

}

export default Card;