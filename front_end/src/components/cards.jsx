import React from "react";
import styles from "../styles/components/cards.module.css";
import DialogWindow from "./dialog";
const Cards = (props) => {
  return (
    <>
      <DialogWindow
        display={props.display}
        closeWindow={props.closeWindow}
        id={props.id}
        first_name={props.first_name}
        last_name={props.last_name}
        email={props.email}
        salary={props.salary}
      />
      <div className={styles.cards} onClick={props.showWindow}>
        <span>
          {props.first_name} {props.last_name}
        </span>
        <span>{props.email}</span>
        <span>{props.salary}</span>
      </div>
    </>
  );
};

export default Cards;
