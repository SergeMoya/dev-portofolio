import React from 'react';
import '../styles/Skills.css'; 

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-header">
        {/*<h1>Skills</h1>*/}
        <h1>Acare Technology</h1>
      </div>
      <div className="skills-container">
        {/* Skill 1: JavaScript */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="JavaScript Logo" className="skills-icons" />
            </div>
            <h3>Javascript</h3>
          </div>
          <p>7+ years experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 2: React */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" className="skills-icons" />
            </div>
            <h3>React</h3>
          </div>
          <p>1 year experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 3: Angular 2+ */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png" alt="Angular 2+ Logo" className="skills-icons" />
            </div>
            <h3>Angular 2+</h3>
          </div>
          <p>1 year experience</p>
          <p>Intermediate Level</p>
        </div>

        {/* Skill 4: Angular 1.x */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-512.png" alt="Angular 1.x Logo" className="skills-icons" />
            </div>
            <h3>Angular 1.x</h3>
          </div>
          <p>3 years experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 5: Web Accessibility */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img">
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/w3c-512.png" alt="Web Accessibility Logo" className="skills-icons" />
            </div>
            <h3>Web Accessibility</h3>
          </div>
          <p>1 year experience</p>
          <p>Advanced Level</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
