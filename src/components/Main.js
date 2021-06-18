import "./main.css";
import React from "react";

export default function Main({ apiHandler }) {
  const callApi = (name) => {
    apiHandler(name);
  };
  return (
    <div className="main">
      <h1 className="header">Covid-19 Updates</h1>
      <div className="box-container">
        <div className="box" onClick={() => callApi("Asia")}>
          Asia
        </div>
        <div className="box" onClick={() => callApi("South America")}>
          South America
        </div>
        <div className="box" onClick={() => callApi("Europe")}>
          Europe
        </div>
        <div className="box" onClick={() => callApi("Africa")}>
          Africa
        </div>
        <div className="box" onClick={() => callApi("North America")}>
          North America
        </div>
        <div className="box" onClick={() => callApi("Australia-Oceania")}>
          Australia-Oceania
        </div>
      </div>
    </div>
  );
}
