import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MyProfile from "../components/MyProfile";
import ProjectDoneList from "../components/ProjectDoneList";
import projectDone from "../services/data";
import GoUp from "../components/GoUp";
import React from "react";
import "../assets/home.css";

const Home = () => {
  return (
    <div className="background-img">
      <Header />
      <h1 id="section-0">
        Hi
        <br />
        I'm Ophelie.
      </h1>
      <a href="#section1">
        <div className="arrow">
          <span className="arrows"></span>
          <span className="arrows"></span>
        </div>
      </a>
      <div className="button-space">
        <Button />
      </div>
      <div id="section1"></div>
      <MyProfile />
      <a href="#section2">
        <div className="arrow2">
          <span className="arrows2"></span>
          <span className="arrows2"></span>
        </div>
      </a>
      <h2 className="title-projectdone" id="section2">
        Réalisations
      </h2>

      <ProjectDoneList projectDone={projectDone} />
      <a href="#section-0">
        <GoUp />
      </a>
      <Footer />
    </div>
  );
};

export default Home;
