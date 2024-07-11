import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            setIsOpen(false);  // Close menu after clicking
        }
    };

    return (
        <header className="header">
            <h1 className="logo" onClick={() => scrollTo('home')}>Acare Technology Co</h1>
            <input id="hamburger" type="checkbox" className="hamburger-checkbox" onClick={() => setIsOpen(!isOpen)} />
            <label htmlFor="hamburger" className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
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
