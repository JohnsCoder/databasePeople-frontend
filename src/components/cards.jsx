import React, { useState } from "react";
import styles from "../styles/components/cards.module.css";
import { EditDialogWindow } from "./dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
const Cards = (props) => {
  const [display, setDisplay] = useState("none");
  const showWindow = () => setDisplay("block");
  const closeWindow = () => setDisplay("none");
  return (
    <>
      <EditDialogWindow
        renderValue={props.renderValue}
        display={display}
        closeWindow={closeWindow}
        id={props.id}
        first_name={props.first_name}
        last_name={props.last_name}
        email={props.email}
        salary={props.salary}
      />
      <div className={styles.container} onClick={showWindow}>
        <div className={styles.cards}>
          <span>
            {props.first_name} {props.last_name}
          </span>
          <span>{props.email}</span>
          <span>{props.salary}</span>
        </div>
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
    </>
  );
};

export default Cards;
