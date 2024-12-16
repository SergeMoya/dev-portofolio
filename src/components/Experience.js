import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css';
import { FaLaptopCode } from 'react-icons/fa'; 
import { IoSchool } from "react-icons/io5";

// Safely parse environment variables with fallback to empty arrays
const parseEnvData = (envVar) => {
  try {
    console.log('Raw env var:', envVar); // Debug log
    return envVar ? JSON.parse(envVar) : [];
  } catch (error) {
    console.error('Error parsing environment variable:', error);
    console.log('Problematic data:', envVar); // Debug log
    return [];
  }
};

// Debug logs
console.log('Work Experience ENV:', process.env.REACT_APP_WORK_EXPERIENCE);
console.log('Education ENV:', process.env.REACT_APP_EDUCATION);

const workExperiences = parseEnvData(process.env.REACT_APP_WORK_EXPERIENCE);
const educationExperiences = parseEnvData(process.env.REACT_APP_EDUCATION);

// Debug logs
console.log('Parsed work experiences:', workExperiences);
console.log('Parsed education experiences:', educationExperiences);

const Experience = () => {
  if (workExperiences.length === 0 && educationExperiences.length === 0) {
    console.log('No experiences found'); // Debug log
    return (
      <div className="section-title">
        <h2>Experience data is currently being configured.</h2>
        <p>Environment Variables Status:</p>
        <pre style={{textAlign: 'left', margin: '20px', padding: '10px', background: '#f5f5f5'}}>
          {JSON.stringify({
            work: process.env.REACT_APP_WORK_EXPERIENCE ? 'Present' : 'Missing',
            education: process.env.REACT_APP_EDUCATION ? 'Present' : 'Missing'
          }, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div>
      {workExperiences.length > 0 && (
        <>
          <h2 className="section-title">Work Experience</h2>
          <VerticalTimeline>
            {workExperiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                date={exp.year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
              >
                <h3 className="vertical-timeline-element-title">{exp.role} at {exp.company}</h3>
                <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                <p>{exp.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </>
      )}

      {educationExperiences.length > 0 && (
        <>
          <h2 className="section-title">Education</h2>
          <VerticalTimeline>
            {educationExperiences.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                date={edu.year}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoSchool />}
              >
                <h3 className="vertical-timeline-element-title">{edu.department}</h3>
                <h4 className="vertical-timeline-element-subtitle">{edu.school}</h4>
                <p className="vertical-timeline-element-location">{edu.location}</p>
                <p>{edu.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </>
      )}
    </div>
  );
};

export default Experience;
