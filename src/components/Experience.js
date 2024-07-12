import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: "1998 - 2022",
      company: "Acare Technology",
      role: "Senior Developer",
      location: "Taipei, Taiwan",
      description: "Leading the development team for high-profile projects involving cloud and React technologies. Significant achievements include increasing system efficiency by 40% and reducing downtime.",
    },
    {
      year: "1998 - 2022",
      company: "Acare Technology",
      role: "Research Lead",
      location: "Taipei, Taiwan",
      description: "Developed scalable applications with React and Node.js, implementing a microservices architecture and working extensively with Docker and Kubernetes to enhance deployment strategies.",
    },
    {
      year: "2006 - 2020",
      company: "Acare Technology",
      role: "Frontend Architect",
      location: "Taipei, Taiwan",
      description: "Focused on front-end development using Angular, integrating seamlessly with backend APIs in Express and MongoDB to deliver responsive and robust applications.",
    }
  ];

  const [expandedIndices, setExpandedIndices] = useState([]);

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
        <div key={index} className="timeline-item" onClick={() => handleExpandClick(index)}>
          <div className="timeline-date">
            {exp.year}
          </div>
          <div className={`timeline-content ${expandedIndices.includes(index) ? 'expanded' : ''}`}>
            <div className="timeline-header">
              <h3 className="timeline-role-company">{exp.role} - {exp.company}</h3>
              <h3 className="timeline-location">{exp.location}</h3>
            </div>
            {expandedIndices.includes(index) && (
              <div className="timeline-details">
                <p>{exp.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
