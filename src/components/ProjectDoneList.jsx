import React from "react";
import ProjectDone from "./ProjectDone";
import "../assets/projectdone.css";

function ProjectDoneList({ projectDone }) {
  console.log(projectDone);
  return (
    <div className="card">
      {projectDone.map((cardName, index) => (
        <ProjectDone key={index} {...cardName} />
      ))}
    </div>
  );
}

export default ProjectDoneList;
