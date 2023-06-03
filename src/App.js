import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
