import React, { useState } from 'react';
import '../styles/Skills.css'; 

const Skills = () => {
    // Object to manage multiple popup states
    const [showPopup, setShowPopup] = useState({
      js: false,
      react: false,
      angular2: false,
      angular1: false,
      accessibility: false
    });

    // Function to toggle popup visibility for a specific skill
    const togglePopup = (skill) => {
      setShowPopup(prev => ({ ...prev, [skill]: !prev[skill] }));
    };

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
            <div className="skills-img"
                onMouseEnter={() => togglePopup('js')}
                onMouseLeave={() => togglePopup('js')}>
              <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
                   alt="JavaScript Logo"
                   className="skills-icons"/>
              {showPopup.js && (
                <div className="popup">
                  <div className="editor-window">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control expand"></span>
                    </div>
                    <code>
                      {/* Your existing code structure here */}
                      <span style={{ color: '#dcdcdc' }}>
                        <span style={{ color: '#ce9178' }}>const</span> <span style={{ color: '#9cdcfe' }}>developerInfo</span> = {'{'}
                        <div className="code-block">
                          <span style={{ color: '#dcdcdc' }}>keyProjects:</span> <span style={{ color: '#ce9178' }}>'Dashboard App',</span><br />
                          <span style={{ color: '#dcdcdc' }}>techSkills:</span> <span style={{ color: '#ce9178' }}>'React, Node.js',</span><br />
                          <span style={{ color: '#dcdcdc' }}>certifications:</span> <span style={{ color: '#ce9178' }}>'Advanced JavaScript Course',</span>
                        </div>
                        {'};'}
                      </span>
                    </code>
                  </div>
                </div>
              )}
            </div>
            <h3>Javascript</h3>
          </div>
          <p>7+ years experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 2: React */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img"
                onMouseEnter={() => togglePopup('react')}
                onMouseLeave={() => togglePopup('react')}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="React Logo" 
                    className="skills-icons"/>
              {showPopup.react && (
                <div className="popup">
                  <div className="editor-window">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control expand"></span>
                    </div>
                    <code>
                      {/* Your existing code structure here */}
                      <span style={{ color: '#dcdcdc' }}>
                        <span style={{ color: '#ce9178' }}>const</span> <span style={{ color: '#9cdcfe' }}>developerInfo</span> = {'{'}
                        <div className="code-block">
                          <span style={{ color: '#dcdcdc' }}>keyProjects:</span> <span style={{ color: '#ce9178' }}>'Dashboard App',</span><br />
                          <span style={{ color: '#dcdcdc' }}>techSkills:</span> <span style={{ color: '#ce9178' }}>'React, Node.js',</span><br />
                          <span style={{ color: '#dcdcdc' }}>certifications:</span> <span style={{ color: '#ce9178' }}>'Advanced JavaScript Course',</span>
                        </div>
                        {'};'}
                      </span>
                    </code>
                  </div>
                </div>
              )}
            </div>
            <h3>React</h3>
          </div>
          <p>1 year experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 3: Angular 2+ */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img"
                 onMouseEnter={() => togglePopup('angular2')}
                 onMouseLeave={() => togglePopup('angular2')}>
                <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png"
                    alt="Angular 2+ Logo" 
                    className="skills-icons"/>
              {showPopup.angular2 && (
                <div className="popup">
                  <div className="editor-window">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control expand"></span>
                    </div>
                    <code>
                      {/* Your existing code structure here */}
                      <span style={{ color: '#dcdcdc' }}>
                        <span style={{ color: '#ce9178' }}>const</span> <span style={{ color: '#9cdcfe' }}>developerInfo</span> = {'{'}
                        <div className="code-block">
                          <span style={{ color: '#dcdcdc' }}>keyProjects:</span> <span style={{ color: '#ce9178' }}>'Dashboard App',</span><br />
                          <span style={{ color: '#dcdcdc' }}>techSkills:</span> <span style={{ color: '#ce9178' }}>'React, Node.js',</span><br />
                          <span style={{ color: '#dcdcdc' }}>certifications:</span> <span style={{ color: '#ce9178' }}>'Advanced JavaScript Course',</span>
                        </div>
                        {'};'}
                      </span>
                    </code>
                  </div>
                </div>
              )}
            </div>
            <h3>Angular 2+</h3>
          </div>
          <p>1 year experience</p>
          <p>Intermediate Level</p>
        </div>

        {/* Skill 4: Angular 1.x */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img"
                 onMouseEnter={() => togglePopup('angular1')}
                 onMouseLeave={() => togglePopup('angular1')}>
                  <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-512.png"
                    alt="Angular 1.x Logo" 
                    className="skills-icons"/>
              {showPopup.angular1 && (
                <div className="popup">
                  <div className="editor-window">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control expand"></span>
                    </div>
                    <code>
                      {/* Your existing code structure here */}
                      <span style={{ color: '#dcdcdc' }}>
                        <span style={{ color: '#ce9178' }}>const</span> <span style={{ color: '#9cdcfe' }}>developerInfo</span> = {'{'}
                        <div className="code-block">
                          <span style={{ color: '#dcdcdc' }}>keyProjects:</span> <span style={{ color: '#ce9178' }}>'Dashboard App',</span><br />
                          <span style={{ color: '#dcdcdc' }}>techSkills:</span> <span style={{ color: '#ce9178' }}>'React, Node.js',</span><br />
                          <span style={{ color: '#dcdcdc' }}>certifications:</span> <span style={{ color: '#ce9178' }}>'Advanced JavaScript Course',</span>
                        </div>
                        {'};'}
                      </span>
                    </code>
                  </div>
                </div>
              )}
            </div>
            <h3>Angular 1.x</h3>
          </div>
          <p>3 years experience</p>
          <p>Advanced Level</p>
        </div>

        {/* Skill 5: Web Accessibility */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="skills-img"
                 onMouseEnter={() => togglePopup('accessibility')}
                 onMouseLeave={() => togglePopup('accessibility')}>
                <img src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/w3c-512.png"
                    alt="Web Accessibility Logo" 
                    className="skills-icons"/>
              {showPopup.accessibility && (
                <div className="popup">
                  <div className="editor-window">
                    <div className="window-controls">
                      <span className="control close"></span>
                      <span className="control minimize"></span>
                      <span className="control expand"></span>
                    </div>
                    <code>
                      {/* Your existing code structure here */}
                      <span style={{ color: '#dcdcdc' }}>
                        <span style={{ color: '#ce9178' }}>const</span> <span style={{ color: '#9cdcfe' }}>developerInfo</span> = {'{'}
                        <div className="code-block">
                          <span style={{ color: '#dcdcdc' }}>keyProjects:</span> <span style={{ color: '#ce9178' }}>'Dashboard App',</span><br />
                          <span style={{ color: '#dcdcdc' }}>techSkills:</span> <span style={{ color: '#ce9178' }}>'React, Node.js',</span><br />
                          <span style={{ color: '#dcdcdc' }}>certifications:</span> <span style={{ color: '#ce9178' }}>'Advanced JavaScript Course',</span>
                        </div>
                        {'};'}
                      </span>
                    </code>
                  </div>
                </div>
              )}
            </div>
            <h3>Accessibility</h3>
          </div>
          <p>1 year experience</p>
          <p>Advanced Level</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
