import React from "react";
import "../assets/myprofile.css";
import profile from "../assets/images/profile.png";

const MyProfile = () => {
  return (
    <>
      <div className="my-profile-part">
        <div className="my-intro">
          <img src={profile} alt="" className="profile-pic" draggable={false}/>
          <p>
            Bonjour ! <br />
            Moi c'est Ophélie Coudert, <em>Développeur Web et mobile Junior. </em>
            <br />
            Aimant les challenges et curieuse du domaine numérique depuis
            toujours, j'ai commencé une formation intensive de 5 mois à la Wild
            Code School en mars 2022.
            <br />
            <em>Orientée front-end</em>, j'aime le visuel et les sites webs
            interactifs.<br />
            Je suis disposée à m'investir afin d'apprendre diverses choses, autant en front-end qu'en back-end.
            <br />
            <em>Je recherche une alternance</em> aux alentours de
            Clermont-Fd ou à distance afin d'obtenir le titre de Concepteur Développeur d'applications.
            <br />
            Issue d'une LEA anglais-japonais, je suis allée à Tokyo pour
            approfondir mes connaissances. J'ai ainsi pu valider mon diplôme (JLPT
            N3). De plus, je pratique de la danse urbaine à l'école INS school, où{" "}
            <em>je suis aussi bénévole</em>.
          </p>
        </div>
        <section id="skills-part">
          <hr></hr>
          <h1 id="skills">Soft Skills</h1>
          <div className="soft-box">

            <div className="soft-full">
              <img alt="" title="Optimiste" src="https://www.svgrepo.com/show/99669/idea-hand-drawn-symbol-of-a-side-head-with-a-lightbulb-inside.svg" className="soft-skills" draggable={false}/>
              <p>Optimiste</p>
            </div>
            <div className="soft-full">
              <img alt="" title="Retour constructif" src="https://www.svgrepo.com/show/318189/work-online-message-chat-internet-connection.svg" className="soft-skills" draggable={false}/>
              <p>Retour constructif</p>
            </div>
            <div className="soft-full">
              <img alt="" title="creative" src="https://cdn3.iconfinder.com/data/icons/abstract-1/512/idea_A-512.png" className="soft-skills" draggable={false}/>
              <p>Créative</p>
            </div>
            <div className="soft-full">
              <img alt="" title="Travail de groupe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBw1c6CFScbFoabVXh0sp21mL42QarDcLrkQ&usqp=CAU" className="soft-skills" draggable={false}/>
              <p>Travail de groupe</p>
            </div>
          </div>
          <hr></hr>
          <h1 id="skills">Hard Skills</h1>
          <div className="hard-box">

            <div className="hard-full">
              <img alt="" title="HTML/CSS" src="https://www.svgrepo.com/show/67129/stacked-files.svg" className="hard-skills" draggable={false}/>
              <p>HTML/CSS</p>
            </div>
            <div className="hard-full">
              <img alt="" title="JavaScript" src="https://www.svgrepo.com/show/327372/logo-javascript.svg" className="hard-skills" draggable={false}/>
              <p>JavaScript</p>
            </div>
            <div className="hard-full">
              <img alt="" title="React" src="https://www.svgrepo.com/show/327388/logo-react.svg" className="hard-skills" draggable={false}/>
              <p>React</p>
            </div>
            <div className="hard-full">
              <img alt="" title="Node js" src="https://www.svgrepo.com/show/327379/logo-nodejs.svg" className="hard-skills" draggable={false}/>
              <p>Node js</p>
            </div>
            <div className="hard-full">
              <img alt="" title="Github" src="https://www.svgrepo.com/show/327364/logo-github.svg" className="hard-skills" draggable={false}/>
              <p>Github</p>
            </div>
          </div>
          <hr></hr>
        </section>

      </div>
    </>
  );
};

export default MyProfile;
