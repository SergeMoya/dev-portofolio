import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import '../styles/Contact.css';
//import StarsBackground from './Canvas'; // Import the StarsBackground component

const Contact = () => {
  return (
    <div className="contact-container">
      {/*<StarsBackground width={window.innerWidth} height={window.innerHeight} /> */}
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span> 5F.-4, No.24, Wuquan 2nd Rd., Xinzhuang Dist., New Taipei City 248022 Taiwan</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>02-2298-8170</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span> info@acarecorp.com</span>
          </div>
          <div className="info-item">
            <FaGlobe className="icon" />
            <span>www.acaretech.com/en</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
