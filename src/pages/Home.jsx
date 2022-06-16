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
      <div className="home-welcome-page">
        <h1 id="homepage">
          Hi
          <br />
          I'm Ophelie.
        </h1>

        <div className="button-space">
          <Button />
        </div>
      </div>
      <main>
      <div id="introduction"></div>
      <MyProfile />

      {/* <h2 className="title-projectdone" id="projects">
        Réalisations
      </h2> */}
      <DemoCarouselList projectDone={projectDone} />
      <a href="#homepage">
        <GoUp />
      </a>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
