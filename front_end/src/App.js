import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cards from "./components/cards";

function App() {
  const [data, setData] = useState();



  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  return <div className="App">
     {typeof data !== "undefined" &&
          data.map((e) => {
            return (
              <Cards 
              key={e.idusers}
              name={`${e.first_name} ${e.last_name}`}
              email={e.email}
              salary={e.salary}
              />
              
              
            );
          })}
  </div>;
}

export default App;
