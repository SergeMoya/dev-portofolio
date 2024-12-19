import React from 'react';
import '../styles/Footer.css'; // Assuming you will create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright © {(new Date().getFullYear())} Serge Zida. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
