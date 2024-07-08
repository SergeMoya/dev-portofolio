import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css';
//import Image1 from '../images/art2.jpg';
import Image2 from '../images/art3.jpg';
import Image3 from '../images/art4.jpg';
import Image4 from '../images/art5.png';

const AboutMe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [ Image2, Image3, Image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 5000); // Change slide every 5000 ms

    return () => clearInterval(interval);
  }, [images.length]); // Added images.length to dependency array

  return (
    <div className="aboutMeContainer">
      <div className="aboutMeCard aboutMePicture">
        {/* Slideshow */}
        <div className="slideshow">
          {images.map((src, index) => (
            <div className={`img-wrapper ${index === currentSlide ? 'active' : ''}`} key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
          <div className="lines">
            {images.map((_, index) => (
              <div
                key={index}
                className={`line ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
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
