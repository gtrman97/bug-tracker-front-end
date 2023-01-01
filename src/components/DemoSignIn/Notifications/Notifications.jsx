import {React, useState} from "react";
import styles from "./Notifications.module.css";

const Notifications = () => {
  const alerts = [
    { read: false, subject: "project status changed", date: "12/31/22" },
    { read: true, subject: "ticket added", date: "01/01/22" },
    { read: false, subject: "project manager changed", date: "01/02/22" },
    { read: false, subject: "project status changed", date: "12/31/22" },
    { read: true, subject: "ticket added", date: "01/01/22" },
    { read: false, subject: "project manager changed", date: "01/02/22" },
    { read: false, subject: "project status changed", date: "12/31/22" },
    { read: true, subject: "ticket added", date: "01/01/22" },
    { read: true, subject: "ticket added", date: "01/01/22" },
  ];

    const [checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked);

  return (
    <>
      {/* <div className={styles.create}>
        <button className={styles.button}>create project</button>
      </div> */}
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <div className={styles["card-header"]}>
              <div className={styles.gradient}>
                <h6 className={styles["header-text"]}>my notifications</h6>
              </div>
            </div>
            <div className={styles["card-body"]}>
              <div className={styles["table-responsive"]}>
                <table className={styles.table}>
                  <thead className={styles["table-heading"]}>
                    <tr className={styles["table-heading-row"]}>
                      <th>
                        {" "}
                        <input onClick={handleClick} type="checkbox" />
                      </th>
                      <th>status</th>
                      <th>subject</th>
                      <th>date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts.map((alert) => (
                      <tr className={styles["table-body-row"]}>
                        <td>
                          <input type="checkbox" checked={checked}/>
                        </td>
                        <td>
                          <span
                            className={!alert.read ? styles.new : null}
                          ></span>
                        </td>
                        <td>
                          <span className={!alert.read ? styles.unread : null}>
                            {alert.subject}
                          </span>
                        </td>
                        <td>
                          <span>{alert.date}</span>
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

export default Notifications;
