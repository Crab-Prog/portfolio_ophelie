import React from "react";
import "../assets/myprofile.css";
import profile from "../assets/images/profile.png";

const MyProfile = () => {
  return (
    <div>
      <div className="my-intro">
        <img src={profile} alt="" className="profile-pic" />
        <p>
          Bonjour ! <br />
          Moi c'est Ophélie Coudert, <em>Développeur Web et mobile Junior. </em>
          <br />
          Aimant les challenges et curieuse du domaine numérique depuis
          toujours, j'ai commencé une formation intensive de 5 mois à la Wild
          Code School en mars 2022.
          <br />
          <em>Orientée front-end</em>, j'aime le visuel et les sites webs
          interactifs.
          <br />
          <em>Je recherche un stage et une alternance</em> aux alentours de
          Clermont-Fd ou à distance.
          <br />
          Issue d'une LEA anglais-japonais, je suis allée à Tokyo pour
          approfondir mes connaissances. J'ai ainsi pu valider mon diplôme (JLPT
          N3). De plus, je pratique de la danse urbaine à l'école INS school, où{" "}
          <em>je suis aussi bénévole</em>.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
