import React from "react";
import "../App.css";

function SocialNetwork() {
  return (
    <div>
      <nav className="social-link">
        <ul className="social-bar">
          <li className="social-name">
            <a
              href="https://github.com/Crab-Prog"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/242373/linkedin.svg"
                alt=""
                className="social-logo"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ophelie-coudert/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/349375/github.svg"
                alt=""
                className="social-logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SocialNetwork;
