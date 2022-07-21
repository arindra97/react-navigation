import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

import {Routes,Route,Link} from 'react-router-dom';

function App() {
  const [position, setPosition] = useState("first");

  //handler untuk onClick
  const linkOnClickHandler = (event, pos) => {
    event.preventDefault();
    setPosition(pos);
  };

  return (
    <div className="App">
      {/* <h1>React Navigation - Intro</h1>
      <span style={{ display: "flex", gap: "0.5em" }}>
        <a href="/" onClick={(event) => linkOnClickHandler(event, "first")}>
          Component Pertama
        </a>
        <a href="/" onClick={(event) => linkOnClickHandler(event, "second")}>
          Component Kedua
        </a>
      </span>
      {position === "first" ? <FirstComponent /> : <SecondComponent />} 
      */}

      <h1>React Navigation</h1>
      <Routes>
        <Route path="/" element={<>Halo Dunia</>}></Route>
        <Route path="about" element={<>Halo About</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
