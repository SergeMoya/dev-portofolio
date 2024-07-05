import React from 'react';
import '../styles/AboutMe.css';
import Image1 from '../images/art2.jpg'; // Make sure the path is correct

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="aboutMeCard aboutMePicture">
        <img src={Image1} alt="Acare Technology" /> {/* Use the imported Image1 variable here */}
      </div>
      <div className="aboutMeCard aboutMeText">
        <h1>Acare Technology</h1>
        <p>Our Company and Operations Acare Technology is an ISO13485 & GMP certified company with well quality 
           control system in Taiwan. Each unit of our products has been conducted the 
           strictest quality inspection before shipment.
           We are specialized in respiratory related product from diagnostic to oxygen 
           therapy equipment to provide you comprehensive and reliable purchase.
           Meeting your product requirement is our priority mission, and your satisfaction is 
           our energy for high quality service.</p>
      </div>
      <div className="aboutMeCard aboutMeContact">
        <p>Contact Us:</p>
        <p>info@acarecorp.com</p>
        <button>Follow Me!</button>
      </div>
    </div>
  );
};

export default AboutMe;
