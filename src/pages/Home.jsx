import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MyProfile from "../components/MyProfile";
import DemoCarouselList from "../components/DemoCarouselList";
import projectDone from "../services/data";
import GoUp from "../components/GoUp";
import React from "react";
import "../assets/home.css";

const Home = () => {
  return (
    <div className="background-img">
      <Header />
      <h1 id="homepage">
        Hi
        <br />
        I'm Ophelie.
      </h1>
      <a href="#introduction">
        <div className="arrow">
          <span className="arrows"></span>
          <span className="arrows"></span>
        </div>
      </a>
      <div className="button-space">
        <Button />
      </div>
      <div id="introduction"></div>
      <MyProfile />
      <a href="#projects">
        <div className="arrow2">
          <span className="arrows2"></span>
          <span className="arrows2"></span>
        </div>
      </a>
      <h2 className="title-projectdone" id="projects">
        Réalisations
      </h2>
      <DemoCarouselList projectDone={projectDone} />
      <a href="#homepage">
        <GoUp />
      </a>
      <Footer />
    </div>
  );
};

export default Home;
