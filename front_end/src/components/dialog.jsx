import React, { useState } from "react";
import Axios from "axios";
import styles from "../styles/components/dialog.module.css";

function DialogWindow(props) {
  const [values, setValues] = useState({
    id: props.id,
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    salary: props.salary,
  });
  
  // {
  //   typeof(props.id) !== "undefined" && setValues({
  //         id: props.id,
  //         first_name: props.first_name,
  //         last_name: props.last_name,
  //         email: props.email,
  //         salary: props.salary,
  //       })
  // }

  function getValue(prop) {
    setValues((defaultValues) => ({
      ...defaultValues,
      [prop.target.alt]: prop.target.value,
    }));
  }

  function sendValue() {
    Axios.post("http://localhost:3001/postUsers", {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      salary: values.salary,
      password_hash: values.password,
    });
    props.closeWindow();
  }

  return (
    <div className={styles.container} style={{ display: props.display }}>
      <div>
        <input
          type="text"
          placeholder="Primeiro Nome..."
          onChange={getValue}
          alt="first_name"
          defaultValue={props.first_name}
        />
        <input
          type="text"
          placeholder="Ultimo Nome..."
          onChange={getValue}
          alt="last_name"
          defaultValue={props.last_name}
        />
        <input
          type="text"
          placeholder="Email..."
          onChange={getValue}
          alt="email"
          defaultValue={props.email}
        />
        <input
          type="text"
          placeholder="Salário..."
          onChange={getValue}
          alt="salary"
          defaultValue={props.salary}
        />
        <input
          type="text"
          placeholder="senha..."
          onChange={getValue}
          alt="password"
          defaultValue={props.editValue}
        />
      </div>
      <div>
        <button onClick={props.closeWindow}> x </button>
        <button onClick={sendValue}> + </button>
      </div>
    </div>
  );
}

export default DialogWindow;
