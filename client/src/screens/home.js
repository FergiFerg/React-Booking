import React from 'react';
import TheUnorganizedGreatManifestation from '../assets/The Unorganized Great Manifestation.jpg';
import '../components/Home.css';
import Footer from '../components/Footer';
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
    return (
        <div>
            <section className="section">
                <h2 className="section-title">Bethany Davis</h2>
                <h3 className="section-subtitle">Illustrator &amp; Tattoo Apprentice</h3>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Books Open
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="https://www.jotform.com/form/230736553967265">Book Appointment</Dropdown.Item>
                        <Dropdown.Item href="/booking">Available Flash</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <img src={TheUnorganizedGreatManifestation} alt="The Unorganized Great Manifestation" className="home-image" />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
