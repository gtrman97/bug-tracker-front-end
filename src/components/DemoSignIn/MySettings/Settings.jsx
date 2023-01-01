import React from "react";
import styles from "./Settings.module.css";

const Settings = () => {

  return (
    <>
          {/* <div className={styles.create}>
        <button className={styles.button}>create project</button>
      </div> */}
      {/* <div className={styles.row}>
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
                      <Th></Th>
                      <Th>status</Th>
                      <Th>subject</Th>
                      <Th>date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {alerts.map((alert) => (
                      <Tr className={styles["table-body-row"]}>
                        <Td>
                        <input type="checkbox" />
                        </Td>
                        <Td>
                          <span className={!alert.read ? styles.new : null}></span>
                        </Td>
                        <Td>
                          <span className={!alert.read ? styles.unread : null}>{alert.subject}</span>
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
      </div> */}
    </>
  );
};
export default Settings;
