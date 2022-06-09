import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import Cards from "./components/cards";
import DialogWindow from "./components/dialog";

function App() {
  const [data, setData] = useState();
  const [display, setDisplay] = useState("none");

  const showWindow = () => setDisplay("block");
  const closeWindow = () => setDisplay("none");

  Axios.get("http://localhost:3001/getUsers").then((res) => {
    setData(res.data);
  });

  return (
    <div className="App">
      <header>
        <span>DataBase People</span>
        <button onClick={showWindow}> + </button>
      </header>
      {typeof data !== "undefined" &&
        data.map((e) => {
          return (
            <Cards
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
      <DialogWindow display={display} closeWindow={closeWindow}/>
    </div>
  );
}

export default App;
