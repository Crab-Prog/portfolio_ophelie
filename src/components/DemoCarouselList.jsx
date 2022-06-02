import React from "react";
import DemoCarousel from "./DemoCarousel";
import "../assets/projectdone.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function DemoCarouselList({ projectDone }) {
    console.log(projectDone);
    return (
        <div className="card">
            <Carousel showArrows>
                {projectDone.map((cardName, index) => (
                    <DemoCarousel key={index} {...cardName} />
                ))}
            </Carousel>
        </div>

    );
}

export default DemoCarouselList;