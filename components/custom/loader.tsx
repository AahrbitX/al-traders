import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="dot dot1" />
        <div className="dot dot2" />
        <div className="dot dot3" />
      </div>
    </div>
  );
};

export default Loader;
