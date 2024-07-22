import React, { useState } from 'react';
import '../styles/Skills.css';
// Importing images
import javascriptLogo from '../images/logo/javascript.svg';
import reactLogo from '../images/logo/react.svg';
import nodejsLogo from '../images/logo/nodedotjs.svg';
import mongodbLogo from '../images/logo/mongodb.svg';
import expressLogo from '../images/logo/express.svg';
import awsLogo from '../images/logo/aws.svg';
import html5Logo from '../images/logo/html5.svg';
import css3Logo from '../images/logo/css3.svg';
import gitLogo from '../images/logo/git.svg';
import jestLogo from '../images/logo/jest.svg';

// Skills data
const skillsData = [
  { key: 'javascript', title: 'JavaScript', imgSrc: javascriptLogo },
  { key: 'react', title: 'React', imgSrc: reactLogo },
  { key: 'nodejs', title: 'Node.js', imgSrc: nodejsLogo },
  { key: 'mongodb', title: 'MongoDB', imgSrc: mongodbLogo },
  { key: 'express', title: 'Express', imgSrc: expressLogo },
  { key: 'aws', title: 'AWS', imgSrc: awsLogo },
  { key: 'html5', title: 'HTML5', imgSrc: html5Logo },
  { key: 'css3', title: 'CSS3', imgSrc: css3Logo },
  { key: 'git', title: 'Git', imgSrc: gitLogo },
  { key: 'jest', title: 'Jest', imgSrc: jestLogo }
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
              <div className="icon-set" >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
