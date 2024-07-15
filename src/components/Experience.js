import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Default styles
import '../styles/Experience.css'; // Additional custom styling if needed
import { FaLaptopCode } from 'react-icons/fa'; 
import { IoSchool } from "react-icons/io5";

const workExperiences = [
  {
    year: "1998 - 2022",
    company: "@Acare Technology",
    role: "Senior Developer",
    location: "Taipei, Taiwan",
    description: "Leading the development team for high-profile projects involving cloud and React technologies. Significant achievements include increasing system efficiency by 40% and reducing downtime.",
    icon: <FaLaptopCode />
  },
  {
    year: "1998 - 2022",
    company: "@Acare Technology",
    role: "Research Lead",
    location: "Taipei, Taiwan",
    description: "Developed scalable applications with React and Node.js, implementing a microservices architecture and working extensively with Docker and Kubernetes to enhance deployment strategies.",
    icon: <FaLaptopCode />
  },
  {
    year: "2006 - 2020",
    company: "@Acare Technology",
    role: "Frontend Architect",
    location: "Taipei, Taiwan",
    description: "Focused on front-end development using Angular, integrating seamlessly with backend APIs in Express and MongoDB to deliver responsive and robust applications.",
    icon: <FaLaptopCode />
  }
];

const educationExperiences = [
  {
    year: "2018 - 2022",
    school: "@Stanford University",
    department: "Master in Computer Science",
    location: "Stanford, CA, USA",
    description: "Focused on machine learning, artificial intelligence, and advanced algorithms. Conducted research on scalable machine learning models and their applications in real-world scenarios.",
    icon: <IoSchool />
  }
];

const Experience = () => {
  return (
    <div>
      <h2 className="section-title">Work Experience</h2>
      <VerticalTimeline>
        {workExperiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.year}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={exp.icon}
          >
            <h3 className="vertical-timeline-element-title">{exp.role}  {exp.company}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      
      <h2 className="section-title">Education</h2>
      <VerticalTimeline>
        {educationExperiences.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={edu.year}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={edu.icon}
          >
            <h3 className="vertical-timeline-element-title">{edu.department} {edu.school}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.location}</h4>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
