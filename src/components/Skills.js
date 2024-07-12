import React, { useState} from 'react';
import '../styles/Skills.css';

// Skills data
const skillsData = [
  {
    key: 'js',
    title: 'JavaScript',
    experience: '7+ years experience',
    level: 'Advanced Level',
    imgSrc: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png'
  },
  {
    key: 'react',
    title: 'React',
    experience: '1 year experience',
    level: 'Advanced Level',
    imgSrc: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
  },
  {
    key: 'angular2',
    title: 'Angular 2+',
    experience: '1 year experience',
    level: 'Intermediate Level',
    imgSrc: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png'
  },
  {
    key: 'angular1',
    title: 'Angular 1.x',
    experience: '3 years experience',
    level: 'Advanced Level',
    imgSrc: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-512.png'
  },
  {
    key: 'accessibility',
    title: 'Accessibility',
    experience: '1 year experience',
    level: 'Advanced Level',
    imgSrc: 'https://cdn3.iconfinder.com/data/icons/social-media-special/256/w3c-512.png'
  }
];

// Code snippet for display in popups, with HTML structure for syntax highlighting and indentation
const codeLines = [
  `<span style="color: #dcdcdc;">const</span> <span style="color: #9cdcfe;">developerInfo</span> = {`,
  `<div class="indent-1"><span style="color: #dcdcdc;">keyProjects:</span> <span style="color: #ce9178;">'Dashboard App',</span></div>`,
  `<div class="indent-1"><span style="color: #dcdcdc;">techSkills:</span> <span style="color: #ce9178;">'React, Node.js',</span></div>`,
  `<div class="indent-1"><span style="color: #dcdcdc;">certifications:</span> <span style="color: #ce9178;">'Advanced JavaScript Course'</span></div>`,
  `};`
];

const renderLineNumbers = (lines) => {
  return lines.map((_, index) => (
    <span key={index} style={{ display: 'block' }}>{index + 1}</span>
  ));
};

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
        {skillsData.map(({ key, title, experience, level, imgSrc }) => (
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
                          {renderLineNumbers(codeLines)}
                        </div>
                        <div className="code-container">
                          {codeLines.map((line, index) => (
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
            <p>{experience}</p>
            <p>{level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
