import React, { useState } from 'react';
import '../styles/Skills.css';

// Skills data
const skillsData = [
  { key: 'javascript', title: 'JavaScript', imgSrc: '../images/logo/javascript.svg' },
  { key: 'react', title: 'React', imgSrc: '../images/logo/react.svg' },
  { key: 'nodejs', title: 'Node.js', imgSrc: '../images/logo/nodedotjs.svg' },
  { key: 'mongodb', title: 'MongoDB', imgSrc: '../images/logo/mongodb.svg' },
  { key: 'express', title: 'Express', imgSrc: '../images/logo/express.svg' },
  { key: 'aws', title: 'AWS', imgSrc: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/aws/aws.png' }, // Update if AWS logo is downloaded
  { key: 'html5', title: 'HTML5', imgSrc: '../images/logo/html5.svg' },
  { key: 'css3', title: 'CSS3', imgSrc: '../images/logo/css3.svg' },
  { key: 'git', title: 'Git', imgSrc: '../images/logo/git.svg' },
  { key: 'jest', title: 'Jest', imgSrc: '../images/logo/jest.svg' }
];

const Skills = () => {
  const [visiblePopup, setVisiblePopup] = useState(null);

  const handleTogglePopup = (key) => {
    setVisiblePopup(visiblePopup === key ? null : key);
  };

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h1>Acare Technology</h1>
      </div>
      <div className="skills-container">
        <div className="slider">
          <div className="track">
            {/* Repeat the icons twice for the infinite loop */}
            {[...Array(2)].map((_, i) => (
              <div className="icon-set" key={i}>
                {skillsData.map(({ key, title, imgSrc }) => (
                  <div className="skills-box" key={key} onClick={() => handleTogglePopup(key)}>
                    <div className="skills-title">
                      <div className="skills-img">
                        <img src={imgSrc} alt={`${title} Logo`} className="skills-icons" />
                        {visiblePopup === key && (
                          <div className="popup">
                            <div className="editor-window">
                              <div className="window-controls">
                                <span className="control close"></span>
                                <span className="control minimize"></span>
                                <span className="control expand"></span>
                              </div>
                              <div className="editor-container">
                                <div className="line-numbers">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} style={{ display: 'block' }}>{index + 1}</span>
                                  ))}
                                </div>
                                <div className="code-container">
                                  {[
                                    `<span style="color: #dcdcdc;">const</span> <span style="color: #9cdcfe;">developerInfo</span> = {`,
                                    `<div class="indent-1"><span style="color: #dcdcdc;">keyProjects:</span> <span style="color: #ce9178;">'Dashboard App',</span></div>`,
                                    `<div class="indent-1"><span style="color: #dcdcdc;">techSkills:</span> <span style="color: #ce9178;">'React, Node.js',</span></div>`,
                                    `<div class="indent-1"><span style="color: #dcdcdc;">certifications:</span> <span style="color: #ce9178;">'Advanced JavaScript Course'</span></div>`,
                                    `};`
                                  ].map((line, index) => (
                                    <div key={index} className="code-block" dangerouslySetInnerHTML={{ __html: line }}></div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <h3>{title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
