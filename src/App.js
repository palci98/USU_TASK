import "./App.css";
import React from "react";
import {  Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Employees from "./components/Employees";
import Management from "./components/Management";
import Homepage from "./components/Homepage";

function App() {

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
        }}
      >
        <Menu />
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Management" element={<Management />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
