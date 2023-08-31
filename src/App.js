import "./App.css";
import React from "react";
//import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Merch from "./components/Merch";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/merch" element={<Merch />} />
      </Routes>
    </>
  );
}

export default App;
