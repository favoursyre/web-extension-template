//This handles the popup page

//Libraries -->
import React, { useState, useEffect } from "react";
//import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import "../assets/popup.css";
import AboutTab from "./components/about";
import HomePage from "./components/home";

//Commencing the code
const name_ = "Syre";
console.log("Name: ", name_);

//This handles the popup page
const Popup = () => {
  useEffect(() => {
    chrome.storage.sync.get(["name"], (res) => {
      console.log("Get res: ", res);
      console.log("Name: ", res.name);
    });
  }, []);

  return (
    <div className="xtension-body">
      <h1>My Extension</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutTab />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Popup;
