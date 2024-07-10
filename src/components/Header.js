import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavVisible, setIsNavVisible] = useState(false);  // State to manage the visibility of the navbar

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            setIsNavVisible(false); // Close the navbar on selection
        }
    };

    const toggleNavbar = () => {
        console.log("Toggling navbar: current state", isNavVisible);
        setIsNavVisible(prevState => !prevState);
    }

    return (
        <header className="header">
            <h1 className="logo" onClick={() => scrollTo('home')}>Acare Technology Co ltd.,</h1>
            <div className="menu-icon" onClick={toggleNavbar}>  {/* Hamburger menu toggle */}
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className={`navbar ${isNavVisible ? 'visible' : ''}`}>
                <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
                <button onClick={() => scrollTo('skills')} className={activeSection === 'skills' ? 'active' : ''}>AcareOx</button>
                <button onClick={() => scrollTo('experience')} className={activeSection === 'experience' ? 'active' : ''}>Production</button>
                <button onClick={() => scrollTo('about-me')} className={activeSection === 'about-me' ? 'active' : ''}>About me</button>
                <button onClick={() => scrollTo('projects')} className={activeSection === 'projects' ? 'active' : ''}>Project</button>
                <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
            </nav>
        </header>
    );
};

export default Header;
