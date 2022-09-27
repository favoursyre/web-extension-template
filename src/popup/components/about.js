//This handles the new tab about page

//Libraries -->
import React from "react";
import "../../assets/popup.css";

//Commencing the code
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

//This handles the about page
const AboutTab = () => {
  return (
    <div className="xtension-body">
      <h1 className="text-blue-500">Tabs About Page</h1>
      <p>This serves as the tabs about page inside the extension</p>
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
      <div>
        <a href="#/">
          <button>Visit home page</button>
        </a>
      </div>
    </div>
  );
};

export default AboutTab;
