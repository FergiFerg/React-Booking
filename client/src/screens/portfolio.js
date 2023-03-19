import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BethImage from "../assets/Beth.jpg";
import image2 from "../assets/bondedBodies.jpg";
import image3 from "../assets/girlInWater.jpg";
import "./portfolio.css";

const Portfolio = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleNext = () => {
        if (index < 2) {
            setIndex(index + 1);
        }
    };

    return (
        <div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                prevIcon={<FontAwesomeIcon icon={faAngleLeft} size="2x" />}
                nextIcon={<FontAwesomeIcon icon={faAngleRight} size="2x" />}
                variant="dark" // Added variant property
            >
                <Carousel.Item>
                    <div className="image-wrapper">
                        <div className="icon prev-icon" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                        </div>
                        <img className="d-block w-100" src={BethImage} alt="Beth" />
                        <div className="icon next-icon" onClick={handleNext}>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" />
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h3>Beth</h3>
                        <p>Description of Beth's project</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="image-wrapper">
                        <div className="icon prev-icon" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                        </div>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Bonded Bodies"
                        />
                        <div className="icon next-icon" onClick={handleNext}>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" />
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h3>Bonded Bodies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="image-wrapper">
                        <div className="icon prev-icon" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                        </div>
                        <img className="d-block w-100" src={image3} alt="Girl in Water" />
                        <div className="icon next-icon" onClick={handleNext}>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" />
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h3>Girl in Water</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Portfolio;
