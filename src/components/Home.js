import React, { useState, useEffect } from 'react';
import Train from '../canvas/TrainScene';
import MouseScroll from '../utilities/MouseScroll'; 
import '../styles/Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const [enableInteraction] = useState(false);
  const fullText = "Hello! This is Acare";

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
    } else {
      setTimeout(() => setShowParagraph(true), 500); // Show the paragraph after the text is completed
    }
  }, [text]);

  const goToProjects = () => {
    const element = document.getElementById('skills');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="homepage">
      <div className={enableInteraction ? 'Canvas interactive' : 'Canvas'} style={{ pointerEvents: enableInteraction ? 'auto' : 'none' }}>
        <Train />
      </div>
      <div className="content">
        <div className="cardcontent">
          <div className="text-content">
            <h1 className={text.length < fullText.length ? "typing" : ""}>{text}</h1>
            {showParagraph && <p className="show">Welcome to AcareOx, the app that helps you track your lifestyle. We are committed to monitoring your sleep management. With Acare App, you can easily connect to our company's pulse oximeter and view your real-time measurement.</p>}
          </div>
        </div>
      </div>
      <MouseScroll onScroll={goToProjects} />
    </div>
  );
};

export default Home;
