import React from "react";
import "../assets/navbar.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    document.querySelector(".full-navigation").style.top = "0";
  } else {
    document.querySelector(".full-navigation").style.top = "-50vh";
  }
}

const NavBar = () => {
  return (
    <>
      <input type="checkbox" id="burger-checkbox" ></input>
      <label for="burger-checkbox">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
      <div class="menu-wrapper">
        <nav className="navigation">
          <ul className="navigation-bar">
            {/* <li className="home-nav"> */}<div className="icon-section">
              <a href="#homepage" className="hover-nav">
                {/* <img
                  src="https://www.svgrepo.com/show/134940/kyoto-japan-flag-symbol.svg"
                  alt=""
                  className="logo"
                /> */}
                <p>Home</p>
              </a>
            {/* </li> */}
            
            <li>
                <a
                  href="#projects"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Crab-Prog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="" className="icon hover-nav" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ophelie-coudert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="" className="icon hover-nav" />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
    //   <div className="full-navigation">
    //     <nav className="navigation">
    //       <ul className="navigation-bar">
    //         <li className="home-nav">
    //           <a href="#homepage" className="hover-nav">
    //             <img
    //               src="https://www.svgrepo.com/show/134940/kyoto-japan-flag-symbol.svg"
    //               alt=""
    //               className="logo"
    //             />
    //             <p>Home</p>
    //           </a>
    //         </li>
    //         <div className="icon-section">
    //           <li>
    //             <a
    //               href="https://github.com/Crab-Prog"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <img src={github} alt="" className="icon hover-nav" />
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="https://www.linkedin.com/in/ophelie-coudert/"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <img src={linkedin} alt="" className="icon hover-nav" />
    //             </a>
    //           </li>
    //         </div>
    //       </ul>
    //     </nav>
    //   </div>
  );
};

export default NavBar;
