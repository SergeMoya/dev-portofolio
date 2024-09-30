import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isOpen]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
            setIsOpen(false);
        }
    };

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'AcareOx'},
        { id: 'experience', label: 'Production'},
        { id: 'about-me', label: 'About me' },
        { id: 'projects', label: 'Project' },
        { id: 'contact', label: 'Contact'},
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h1 className="logo" onClick={() => scrollTo('home')}>Acare Technology Co</h1>
            <input
                id="hamburger-toggle"
                type="checkbox"
                className="hamburger-checkbox"
                checked={isOpen}
                onChange={toggleMenu}
            />
            <label htmlFor="hamburger-toggle" className="menu-icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                {menuItems.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={activeSection === item.id ? 'active' : ''}
                        style={{ '--i': index + 1 }}
                    >
                        <span className="icon">{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;