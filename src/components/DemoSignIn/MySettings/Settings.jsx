import { React, useState } from "react";
import styles from "./Settings.module.css";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import ModalTemplate from "../Modals/ModalTemplate";
import Delete from "../Modals/ModalContent/Delete";

const Settings = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("working");
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal}>Modal</button>
      {modal ? (
        <ModalTemplate
          onToggleModalHandler={toggleModal}
          title={'are you sure you want to delete?'}
          content={<Delete onToggleModalHandler={toggleModal} />}
        />
      ) : null}
    </>
  );
};
export default Settings;
