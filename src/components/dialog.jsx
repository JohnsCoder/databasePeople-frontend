import React, { useState } from "react";
import api from "../services/api";
import styles from "../styles/components/dialog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faX,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { sha256 } from "js-sha256";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  salary: "",
  password: "",
};
function CreateDialogWindow(props) {
  const [values, setValues] = useState({ ...initialValues });

  function getValue(prop) {
    setValues((defaultValues) => ({
      ...defaultValues,
      [prop.target.alt]: prop.target.value,
    }));
  }

  function postValue() {
    api.post("newUsers", {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      salary: values.salary,
      password_hash: sha256(values.password),
    });
    props.renderValue();
    props.renderValue();
    props.closeWindow();
    setValues({ ...initialValues });
  }

  function cancelValue() {
    setValues({ ...initialValues });
    props.closeWindow();
  }
  return (
    <div className={styles.container} style={{ display: props.display }}>
      <div className={styles.form} style={{ height: "580px" }}>
        <div>
          <label>Primeiro Nome:</label>
          <input
            type="text"
            placeholder="Ex. Mario"
            onChange={getValue}
            alt="first_name"
            value={values.first_name}
          />

          <label>Ultimo Nome:</label>
          <input
            type="text"
            placeholder="Ex. Júnior"
            onChange={getValue}
            alt="last_name"
            value={values.last_name}
          />

          <label>Email:</label>
          <input
            type="text"
            placeholder="Ex. carlos@email.com"
            onChange={getValue}
            alt="email"
            value={values.email}
          />

          <label>Salário:</label>
          <input
            type="text"
            placeholder="Ex. 5630"
            onChange={getValue}
            alt="salary"
            value={values.salary}
          />

          <label>Senha:</label>
          <input
            type="text"
            placeholder="Ex. 58450matheus"
            onChange={getValue}
            alt="password"
            value={values.password}
          />
        </div>
        <div>
          <button onClick={cancelValue}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <button onClick={postValue}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}



















function EditDialogWindow(props) {
  const [values, setValues] = useState({
    id: props.id,
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    salary: props.salary,
  });

  function editValue(prop) {
    setValues((defaultValues) => ({
      ...defaultValues,
      [prop.target.alt]: prop.target.value,
    }));
  }

  function updateValue() {
    api.put("editUsers", {
      id: values.id,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      salary: values.salary,
      password_hash: values.password,
    });
    props.renderValue();
    props.renderValue();
    props.closeWindow();
  }

  function delValue() {
    api.delete(`delUsers/${values.id}`);
    props.renderValue();
    props.renderValue();
    props.closeWindow();
  }

  return (
    <div className={styles.container} style={{ display: props.display }}>
      <div className={styles.form}>
        <div>
          <label>Primeiro Nome:</label>
          <input
            type="text"
            placeholder="Ex. Mario"
            onChange={editValue}
            alt="first_name"
            defaultValue={props.first_name}
          />

          <label>Ultimo Nome:</label>
          <input
            type="text"
            placeholder="Ex. Júnior"
            onChange={editValue}
            alt="last_name"
            defaultValue={props.last_name}
          />

          <label>Email:</label>
          <input
            type="text"
            placeholder="Ex. carlos@email.com"
            onChange={editValue}
            alt="email"
            defaultValue={props.email}
          />

          <label>Salário:</label>
          <input
            type="text"
            placeholder="Ex. 5630"
            onChange={editValue}
            alt="salary"
            defaultValue={props.salary}
          />
        </div>
        <div>
          <button onClick={props.closeWindow}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <button onClick={delValue}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button onClick={updateValue}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </div>
    </div>
  );
}
export { CreateDialogWindow, EditDialogWindow };
