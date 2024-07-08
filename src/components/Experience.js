import React, { useState } from 'react';
import '../styles/Experience.css';
import { FaCode } from 'react-icons/fa'; // Ensure you have react-icons installed

const Experience = () => {
  const experiences = [
    {
      year: "1998 - Present",
      company: "Acare Technology Co ltd.,",
      role: "Production and development",
      description: "Leading the development team for a high-profile project involving cloud and React technologies.",
      icon: <FaCode />
    },
    {
      year: "1998 - 2022",
      company: "Acare Technology Co ltd.,",
      role: "Research",
      description: "Developed scalable applications with React and Node.js. Implemented microservices architecture and worked extensively with Docker and Kubernetes.",
      icon: <FaCode />
    },
    {
      year: "2006 - 2020",
      company: "Acare Technology Co ltd.,",
      role: "Design and implementation",
      description: "Focused on front-end development with Angular and integration with backend APIs in Express and MongoDB.",
      icon: <FaCode />
    }
  ];

  const [expandedIndices, setExpandedIndices] = useState([]);

  // Function to handle expand/collapse click
  const handleExpandClick = (index) => {
    const newExpandedIndices = [...expandedIndices];
    if (expandedIndices.includes(index)) {
      newExpandedIndices.splice(expandedIndices.indexOf(index), 1);
    } else {
      newExpandedIndices.push(index);
    }
    setExpandedIndices(newExpandedIndices);
  };

  return (
    <div className="timeline-container">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-icon">
            {exp.icon}
          </div>
          <div className="timeline-content">
            <h3>{exp.year}</h3>
            <h4>{exp.company}</h4>
            <h5>{exp.role}</h5>
            <p>{expandedIndices.includes(index) && exp.description}</p>
            <button onClick={() => handleExpandClick(index)}>
              {expandedIndices.includes(index) ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
