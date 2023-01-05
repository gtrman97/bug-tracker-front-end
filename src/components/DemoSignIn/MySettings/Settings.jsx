import React from "react";
import Popup from "reactjs-popup";
import styles from "./Settings.module.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Settings = () => {
  return (
    <>
      <div className={styles.menu}>
        {" "}
        <div className={styles["menu-item"]}> Menu item 1</div>{" "}
        <div className={styles["menu-item"]}> Menu item 2</div>{" "}
        <div className={styles["menu-item"]}> Menu item 3</div>{" "}
        <Popup
          trigger={<div className={styles["menu-item"]}> Sub menu </div>}
          position="right top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={true}
        >
          {" "}
          <div className={styles.menu}>
            {" "}
            <div className={styles["menu-item"]}> item 1</div>{" "}
            <div className={styles["menu-item"]}> item 2</div>{" "}
            <div className={styles["menu-item"]}> item 3</div>{" "}
          </div>{" "}
        </Popup>{" "}
        <div className={styles["menu-item"]}> Menu item 4</div>{" "}
      </div>
    </>
  );
};
export default Settings;
