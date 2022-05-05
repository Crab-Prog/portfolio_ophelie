import React from "react";
import pdf from "../assets/pdf/CV_coudert-ophelie-stage.pdf";
import "../assets/button.css";

const Button = () => {
  return (
    <div>
      <button>
        <a href={pdf} download className="button-hover">
          Cliquer pour télécharger le CV
        </a>
      </button>
    </div>
  );
};

export default Button;
