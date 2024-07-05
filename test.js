//Test the image slide show implementation 

.aboutMeContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    background: blueviolet;
    align-items: start;
  }
  
  .aboutMeCard {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .img-wrapper {
    display: none;
    height: 70vh;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
  
  .img-wrapper.active {
    display: block;
  }
  
  .dots {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
  
  .dot {
    background: #fff;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
  }
  
  .dot.active {
    background: red;
  }






  import React, { useState } from 'react';
import '../styles/AboutMe.css';
import Image1 from '../images/art2.jpg';
import Image2 from '../images/art3.jpg'; // Add your own images
import Image3 from '../images/art4.jpg';

const images = [Image1, Image2, Image3];

const AboutMe = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = index => {
    setCurrent(index);
  };

  return (
    <div className="aboutMeContainer">
      <div className="aboutMeCard aboutMePicture">
        {images.map((img, index) => (
          <div key={index} className={`img-wrapper ${index === current ? 'active' : ''}`}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <div key={index} className={`dot ${index === current ? 'active' : ''}`} onClick={() => handleDotClick(index)}></div>
          ))}
        </div>
      </div>
      <div className="aboutMeCard aboutMeText">
        <h1>Acare Technology</h1>
        <p>Our Company and Operations...</p>
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

  