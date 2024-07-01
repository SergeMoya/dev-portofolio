import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            {/*<h1 className="logo">Serge</h1>*/}
            <h1 className="logo">Acare Technology Co ltd.,</h1>
            {/* Uncomment and customize this if needed: <h1 className="logo">Your Name</h1> */}
            <nav className="navbar">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/AcareOX" className={({ isActive }) => isActive ? 'active' : ''}>AcareOx</NavLink>
                {/*<NavLink to="/AcareOX" className={({ isActive }) => isActive ? 'active' : ''}>AcareOx</NavLink>
                {/*<NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                <NavLink to="/expereince" className={({ isActive }) => isActive ? 'active' : ''}>Experience</NavLink>*/}
                <NavLink to="/production" className={({ isActive }) => isActive ? 'active' : ''}>Production</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
