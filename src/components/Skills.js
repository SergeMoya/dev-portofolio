import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Skills.css';
import { skillDescriptions } from './skillDescriptions';

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
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const codeContainerRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const handleTogglePopup = (key) => {
    const newVisiblePopup = visiblePopup === key ? null : key;
    setVisiblePopup(newVisiblePopup);
    setIsAnimationPaused(newVisiblePopup !== null);
    
    // Remove active class from all skills boxes
    document.querySelectorAll('.skills-box').forEach(box => {
      box.classList.remove('active');
    });

    // Add active class to clicked skills box
    if (newVisiblePopup) {
      const activeBox = document.querySelector(`.skills-box[data-key="${key}"]`);
      if (activeBox) activeBox.classList.add('active');
    }
  };

  const syncScroll = useCallback(() => {
    if (lineNumbersRef.current && codeContainerRef.current) {
      lineNumbersRef.current.scrollTop = codeContainerRef.current.scrollTop;
    }
  }, []);

  useEffect(() => {
    const currentCodeContainer = codeContainerRef.current;
    if (currentCodeContainer) {
      currentCodeContainer.addEventListener('scroll', syncScroll);
      return () => currentCodeContainer.removeEventListener('scroll', syncScroll);
    }
  }, [syncScroll, visiblePopup]);

  const renderCodeLine = (line, index, totalLines) => {
    let className = "code-line";
    let content = line;

    if (line.startsWith('//')) {
      className += " comment";
      content = <span className="comment">{line}</span>;
    } else if (line.startsWith('const')) {
      const parts = line.split('=');
      content = (
        <>
          <span className="keyword">const</span>
          <span className="variable"> {parts[0].split(' ')[1]}</span>
          <span className="operator"> = </span>
          <span className="punctuation">[</span>
        </>
      );
    } else if (line.trim().startsWith('"')) {
      className += " indent-1";
      content = (
        <>
          <span className="string">"{line.trim().slice(1, -2)}"</span>
          <span className="punctuation">,</span>
        </>
      );
    } else if (line.trim() === '];') {
      content = <span className="punctuation">{line.trim()}</span>;
    } else if (index === totalLines - 1) {
      // Special handling for the last line (closing brace)
      content = <span className="punctuation">{line.trim()}</span>;
    }

    return <div key={index} className={className}>{content}</div>;
  };

  const renderLineNumbers = (codeLines) => {
    return codeLines.map((_, index) => (
      <div key={index}>{index + 1}</div>
    ));
  };

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h1>Skills Overview</h1>
      </div>
      <div className={`slider ${isAnimationPaused ? 'paused' : ''}`}>
        <div className="track">
          <div className="icon-set">
            {skillsData.map((skill) => (
              <div
                key={skill.key}
                data-key={skill.key}
                className="skills-box"
                onClick={() => handleTogglePopup(skill.key)}
              >
                <div className="skills-title">
                  <div className="skills-img">
                    <img src={skill.imgSrc} alt={skill.title} className="skills-icons" />
                  </div>
                  <h3>{skill.title}</h3>
                </div>
                {visiblePopup === skill.key && (
                  <div className="popup">
                    <div className="editor-window">
                      <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control expand"></span>
                      </div>
                      <div className="editor-content">
                        <div className="line-numbers" ref={lineNumbersRef}>
                          {renderLineNumbers(skillDescriptions[skill.key])}
                        </div>
                        <div className="code-container" ref={codeContainerRef}>
                          <div className="code-content">
                            {skillDescriptions[skill.key].map((line, index) => 
                              renderCodeLine(line, index, skillDescriptions[skill.key].length)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="icon-set">
            {skillsData.map((skill) => (
              <div
                key={`${skill.key}-clone`}
                className="skills-box"
                onClick={() => handleTogglePopup(skill.key)}
              >
                <div className="skills-title">
                  <div className="skills-img">
                    <img src={skill.imgSrc} alt={skill.title} className="skills-icons" />
                  </div>
                  <h3>{skill.title}</h3>
                </div>
                {visiblePopup === skill.key && (
                  <div className="popup">
                    <div className="editor-window">
                      <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control expand"></span>
                      </div>
                      <div className="editor-content">
                        <div className="line-numbers" ref={lineNumbersRef}>
                          {renderLineNumbers(skillDescriptions[skill.key])}
                        </div>
                        <div className="code-container" ref={codeContainerRef}>
                          <div className="code-content">
                            {skillDescriptions[skill.key].map((line, index) => 
                              renderCodeLine(line, index, skillDescriptions[skill.key].length)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;