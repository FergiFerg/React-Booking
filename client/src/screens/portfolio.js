import React from "react";
import BethImage from "../assets/Beth.jpg";
import image2 from "../assets/bondedBodies.jpg";
import image3 from "../assets/girlInWater.jpg";
import "./portfolio.css";

const Portfolio = () => {
    return (
        <div className="image-grid">
            <div className="image-wrapper">
                <img className="image" src={BethImage} alt="Beth" />
                <div className="overlay">

                </div>
            </div>
            <div className="image-wrapper">
                <img className="image" src={image2} alt="Bonded Bodies" />
                <div className="overlay">

                </div>
            </div>
            <div className="image-wrapper">
                <img className="image" src={image3} alt="Girl in Water" />
                <div className="overlay">

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
