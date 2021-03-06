import React from 'react';
import "../assets/projectdone.css";

const DemoCarousel = (props) => {
  return (
      <div className="cardFull">
        <div className="img-hover">
          <a
            href={props.lien}
            target="_blank"
            rel="noreferrer"
            className="link-project"
          >
            <img src={props.img} alt="" className="card-img" draggable={false}/>
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.desc}</p>
        </div>
      </div>
  );
};
export default DemoCarousel;