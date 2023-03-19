import React from "react";
import BethImage from '../assets/Beth.jpg';
import '../screens/about.css';


const About = () => {
    return (
        <div>
            <div>
                <img src={BethImage} alt="Bethany Davis" className="about-image" />
            </div>
            <div>
                <p>Bethany Davis</p>
            </div>
            <div>
                <p>
                    My name is Bethany Davis and I am an artist based in Peterborough, Ontario. I completed a degree in Drawing and Painting at the Ontario College of Art and Design University (OCAD U) in the spring of 2020.
                </p>
                <p>
                    My creative practice is mostly focused on black-and-white digital illustrations which reference my experience and observation of the land. Through text and images, they also tackle emotions surrounding growing pains, melancholy, and grief.
                </p>
                <p>
                    Currently, my art is transitioning into the tattoo space, as I work on an apprenticeship with Tasha Sinton at Sinton Ink.
                </p>
            </div>
        </div>
    );
};

export default About;
