import React from "react";
import styles from './Projects.module.css';
import dots from '../../../images/icons/three-dots.png';

const Projects = () => {

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.card}>
                    <div className={styles['card-header']}>
                        <div className={styles.gradient}>
                            <h6 className={styles['header-text']}>my projects</h6>
                        </div>
                    </div>
                    <div className={styles['card-body']}>
                        <div className={styles['table-responsive']}>
                            <table className={styles.table}>
                                <thead className={styles['table-heading']}>
                                    <tr className={styles['table-heading-row']}>
                                        <th>project name</th>
                                        <th>project manager</th>
                                        <th>description</th>
                                        <th>status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles['table-body-row']}>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>john michael</span>
                                        </td>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>in progress</span>
                                        </td>
                                        <td className={styles.actions}>
                                            <img src={dots} alt="dots" className={styles.dots}/>
                                        </td>
                                    </tr>
                                    <tr className={styles['table-body-row']}>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>john michael</span>
                                        </td>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>in progress</span>
                                        </td>
                                        <td className={styles.actions}>
                                            <img src={dots} alt="dots" className={styles.dots}/>
                                        </td>
                                    </tr>
                                    <tr className={styles['table-body-row']}>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>john michael</span>
                                        </td>
                                        <td>
                                            <span>demo project 1</span>
                                        </td>
                                        <td>
                                            <span>in progress</span>
                                        </td>
                                        <td className={styles.actions}>
                                            <img src={dots} alt="dots" className={styles.dots}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Projects;