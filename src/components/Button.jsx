import React from "react";
import pdf from "../assets/pdf/CV_coudert-ophelie-stage-alternance.pdf";
import "../assets/button.css";

const Button = () => {
  return (
    <div className="button-box">
      <button>
        <a href={pdf} download className="button-hover">
          Télécharger mon CV
        </a>
      </button>
      <a href="#introduction">
        <div className="arrow">
          <span className="arrows"></span>
          <span className="arrows"></span>
        </div>
      </a>
    </div>
  );
};

export default Button;
