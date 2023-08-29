import "./App.css";
import React from "react";
//import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Merch from "./components/Merch";
import About from "./components/About";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/merch" element={<Merch />} />
      </Routes>
    </>
  );
}

export default App;
