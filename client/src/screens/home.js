import React from 'react';
import TheUnorganizedGreatManifestation from '../assets/The Unorganized Great Manifestation.jpg';
import '../components/Home.css';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
            <section className="section">
                <h2 className="section-title">Bethany Davis</h2>
                <h3 className="section-subtitle">Illustrator & Tattoo Apprentice</h3>
                <img src={TheUnorganizedGreatManifestation} alt="The Unorganized Great Manifestation" />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
