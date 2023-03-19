import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleMobileMenuClick = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>Bethany Davis</h1>
                </div>
                <div className={`nav-elements ${showMobileMenu ? 'show' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleMobileMenuClick}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" onClick={handleMobileMenuClick}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/booking" onClick={handleMobileMenuClick}>
                                Flash
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={handleMobileMenuClick}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" onClick={handleMobileMenuClick}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bee_achinghands/">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="2x"
                                    color="white"
                                    style={{ height: '26px', marginTop: '2px', marginRight: '52px' }}
                                />

                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`mobile-menu-icon ${showMobileMenu ? 'open' : ''}`} onClick={handleMobileMenuClick}>
                    <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} size="2x" color="white" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
