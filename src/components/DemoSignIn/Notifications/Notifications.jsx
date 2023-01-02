import {React, useState} from "react";
import styles from "./Notifications.module.css";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';

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
                <Table className={styles.table}>
                  <Thead className={styles["table-heading"]}>
                    <Tr className={styles["table-heading-row"]}>
                      <Th className={styles['table-col']}>
                        {" "}
                        <input type="checkbox" onClick={handleClick}/>
                      </Th>
                      <Th className={styles['table-col']}>status</Th>
                      <Th className={styles['table-col']}>subject</Th>
                      <Th className={styles['table-col']}>date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {alerts.map((alert) => (
                      <Tr className={styles["table-body-row"]}>
                        <Td>
                          <input type="checkbox" checked={checked}/>
                        </Td>
                        <Td>
                          <span
                            className={!alert.read ? styles.new : styles.read}
                          ></span>
                        </Td>
                        <Td>
                          <span className={!alert.read ? styles.unread : null}>
                            {alert.subject}
                          </span>
                        </Td>
                        <Td>
                          <span>{alert.date}</span>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
