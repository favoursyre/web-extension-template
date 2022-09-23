//This handles the popup page

//Libraries -->
import React, { useState, useEffect } from "react";
//import { createRoot } from "react-dom/client";
import "../assets/popup.css";

//Commencing the code
const name_ = "Syre";
console.log("Name: ", name_);

//This handles the redirecting page
const handleRedirect = () => {
  console.log("I'm logging in");
  chrome.tabs.create({
    url: "http://www.google.com",
    selected: true,
    active: true,
  });
};

//This handles the storing of input page
const handleInput = (e) => {
  e.preventDefault();
  console.log("E: ", e);
  const name = e.target[0].value;
  console.log("Set Name: ", { name });
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set to ${name}`);
  });
};

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
      <h1 className="text-blue-500">My Extension</h1>
      <p>I'm creating my first web extension</p>
      <img src="erc.jpg" alt="erc" />
      <div>
        <button onClick={handleRedirect} className="">
          Visit Google
        </button>
      </div>
      <div>
        <form onSubmit={handleInput}>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Enter your name"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
