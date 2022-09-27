//This handles the new tab about page

//Libraries -->
import React from "react";
import "../../assets/popup.css";

//Commencing the code
const HomePage = () => {
  return (
    <div className="xtension-body">
      <h1 className="text-blue-500">Home Page</h1>
      <p>This serves as the home page inside the extension</p>
      <img src="erc.jpg" alt="erc" />
      <div>
        <a href="#/about">
          <button>Visit about page</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
