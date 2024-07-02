import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id); // Update the active section state
        }
    };

    return (
        <header className="header">
            <h1 className="logo" onClick={() => scrollTo('home')}>Acare Technology Co ltd.,</h1>
            <nav className="navbar">
                <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
                <button onClick={() => scrollTo('skills')} className={activeSection === 'skills' ? 'active' : ''}>AcareOx</button>
                <button onClick={() => scrollTo('production')} className={activeSection === 'production' ? 'active' : ''}>Production</button>
                <button onClick={() => scrollTo('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
            </nav>
        </header>
    );
};

export default Header;
