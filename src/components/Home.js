import React, { useState, useEffect } from 'react';
import profilePic from '../images/acare_profile.png';
import backgroundImage from '../images/art1.jpg'; 
import '../styles/Home.css';

const Home = () => {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [subtext, setSubtext] = useState('');
  const [h1Complete, setH1Complete] = useState(false); // State to check if h1 is completed
  const [showParagraph, setShowParagraph] = useState(false); // State to control the visibility of the paragraph
  const fullText = "Hello!";
  const fullSubtext = "This is Acare Technology";

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
    } else {
      setH1Complete(true); // Set the completion state to true when done
    }
  }, [text]);

  useEffect(() => {
    if (h1Complete && subtext.length < fullSubtext.length) {
      setTimeout(() => setSubtext(fullSubtext.slice(0, subtext.length + 1)), 100);
    } else if (h1Complete && subtext.length === fullSubtext.length) {
      setTimeout(() => setShowParagraph(true), 500); // Show the paragraph after h2 is done
    }
  }, [subtext, h1Complete]); // Depend on h1 completion state

  const goToProjects = () => {
    const element = document.getElementById('skills');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseMove = (e) => {
    setLightPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    /* Uncomment here and comment below <div > to inclue the backgraound image
    <div className="homepage" onMouseMove={handleMouseMove} style={{
      background: `url(${backgroundImage}) center / cover no-repeat, 
                   radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(249, 178, 163, 0.09), rgba(249, 178, 163, 0) 40%)`
    }}>
    */
    <div className="homepage" onMouseMove={handleMouseMove} style={{
      backgroundImage: `url(${backgroundImage})`, // Set the background image via inline style
      backgroundSize: 'cover', // Cover the entire size of the container
      backgroundPosition: 'center', // Center the background image
      background: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(249, 178, 163, 0.09), rgba(249, 178, 163, 0) 40%)`
    }}>
      <div className="content">
        <div className="cardcontent">
          <div className="text-content">
            <h1 className={text.length < fullText.length ? "typing" : ""}>{text}</h1>
            {h1Complete && <h2 className={subtext.length < fullSubtext.length ? "typing" : ""}>{subtext}</h2>}
            {showParagraph && <p className="show">Welcome to AcareOx, the app that helps you track your lifestyle. We are committed to monitor your sleep management. With Acare App, you can easily connect to our company's pulse oximeter and view your real-time measurement. You can also view your health trend over time. Acare App is a valuable tool to stay on top of your health for people with chronic conditions such as asthma, COPD, or sleep apnea.</p>}
          </div>
        </div>
        <div className="cardpicture">
          <img src={profilePic} alt="Profile" className="profile-pic"/>
        </div>
      </div>
      <div className="mouse_scroll" onClick={goToProjects}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll_arrows">
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
