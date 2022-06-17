import React from "react";
import "../assets/navbar.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

const NavBar = () => {

  return (
    <>
    <input type="checkbox" id="burger-checkbox"></input>
    <label htmlFor="burger-checkbox">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </label>
      <div className="menu-wrapper" >
        <nav className="navigation">
          <ul className="navigation-bar">
            <div className="icon-section">
              <a href="#homepage" className="hover-nav">
                Home
              </a>
              <li>
                <a
                  href="#skills-part"
                  className="hover-nav"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover-nav"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Crab-Prog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="" className="icon hovernav" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ophelie-coudert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" className="icon hovernav" />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
