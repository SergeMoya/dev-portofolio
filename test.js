import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Home.css';   // Ensure this import path is correct

const Home = () => {
  const navigate = useNavigate();
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const goToProjects = () => {
    navigate('/projects');
  };

  const handleMouseMove = (e) => {
    setLightPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="homepage" onMouseMove={handleMouseMove} style={{
      background: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(255,255,255,0.1), rgba(255,255,255,0) 30%)`
    }}>
      <h1>Hello!</h1>
      <h2>This is Acare Technology,</h2>
      <p>Welcome to AcareOx, the app that helps you track your lifestyle. We are committed to monitor your sleep management. With Acare App, you can easily connect to our company's pulse oximeter and view your real-time measurement. You can also view your health trend over time. Acare App is a valuable tool to stay on top of your health for people with chronic conditions such as asthma, COPD, or sleep apnea.</p>
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
