import "../styles/main/App.css";
import React, { useEffect, useState } from "react";
import Cards from "../components/cards";
import { CreateDialogWindow } from "../components/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import api from "../services/api";
function App() {
  const [data, setData] = useState();
  const [display, setDisplay] = useState("none");

  const showWindow = () => setDisplay("block");
  const closeWindow = () => setDisplay("none");

  function renderValue() {
    api.get("users").then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    renderValue();
  }, []);

  return (
    <div className="App">
      <header>
        <span>DataBase People</span>
        <button onClick={showWindow}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      {typeof data !== "undefined" &&
        data.map((e) => {
          return (
            <Cards
              renderValue={renderValue}
              showWindow={showWindow}
              key={e.id}
              id={e.id}
              first_name={e.first_name}
              last_name={e.last_name}
              email={e.email}
              salary={e.salary}
            />
          );
        })}
      <CreateDialogWindow
        display={display}
        closeWindow={closeWindow}
        renderValue={renderValue}
      />
    </div>
  );
}

export default App;
