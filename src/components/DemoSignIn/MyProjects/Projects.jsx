import React from "react";
import styles from "./Projects.module.css";
import dots from "../../../images/icons/three-dots.png";

const Projects = () => {
  const projects = [
    {
      name: "demo project 1",
      manager: "john michael",
      description: "demo project 1",
      status: "not started",
    },
    {
      name: "demo project 2",
      manager: "jimmy jones",
      description: "demo project 2",
      status: "completed",
    },
    {
      name: "demo project 3",
      manager: "michael scott",
      description: "demo project 3",
      status: "in progress",
    },
    {
        name: "demo project 4",
        manager: "john michael",
        description: "demo project 4",
        status: "not started",
      },
      {
        name: "demo project 5",
        manager: "jimmy jones",
        description: "demo project 5",
        status: "completed",
      },
      {
        name: "demo project 6",
        manager: "michael scott",
        description: "demo project 6",
        status: "in progress",
      },
      {
        name: "demo project 7",
        manager: "michael scott",
        description: "demo project 7",
        status: "in progress",
      }
  ];

  return (
    <>
      <div className={styles.create}>
        <button className={styles.button}>create project</button>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <div className={styles["card-header"]}>
              <div className={styles.gradient}>
                <h6 className={styles["header-text"]}>my projects</h6>
              </div>
            </div>
            <div className={styles["card-body"]}>
              <div className={styles["table-responsive"]}>
                <table className={styles.table}>
                  <thead className={styles["table-heading"]}>
                    <tr className={styles["table-heading-row"]}>
                      <th>project name</th>
                      <th>project manager</th>
                      <th>description</th>
                      <th>status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr className={styles["table-body-row"]}>
                        <td>
                          <span>{project.name}</span>
                        </td>
                        <td>
                          <span>{project.manager}</span>
                        </td>
                        <td>
                          <span>{project.description}</span>
                        </td>
                        <td>
                          <span>{project.status}</span>
                        </td>
                        <td className={styles.actions}>
                          <img src={dots} alt="dots" className={styles.dots} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
