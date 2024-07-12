import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            // Ensure the checkbox is unchecked to hide the navbar
            document.getElementById('hamburger').checked = false;
        }
    };

    // This function toggles the checkbox instead of changing the state
    const toggleNavbar = () => {
        const checkbox = document.getElementById('hamburger');
        checkbox.checked = !checkbox.checked;
    }

    return (
        <header className="header">
            <h1 className="logo" onClick={() => scrollTo('home')}>Acare Technology Co Ltd.</h1>
            <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
            <label htmlFor="hamburger" className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <nav className="navbar">
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
