//This handles the new tab page

//Libraries -->
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeTab from "./components/home";
import AboutTab from "./components/about";
import "../assets/tabs.css";

//Commencing the code
const Tabs = () => {
  return (
    <div className="xtension-body">
      <h1 className="text-blue-500">Tabs</h1>
      <p>This serves as the tabs page</p>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/about" element={<AboutTab />} />
      </Routes>
    </div>
  );
};

export default Tabs;
