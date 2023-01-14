import { React, useState } from "react";
import styles from "./Settings.module.css";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import ModalTemplate from "../Modals/ModalTemplate";

const Settings = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log('poo');
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal}>Modal</button>
      {modal ? <ModalTemplate onToggleModalHandler={toggleModal} content={<p>content</p>}/> : null}
    </>
  );
};
export default Settings;
