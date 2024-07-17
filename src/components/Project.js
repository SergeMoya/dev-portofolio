import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../styles/Project.css';
import Image1 from '../images/Project1.png';
import Image2 from '../images/Project2.png';
import Image3 from '../images/Project3.png';

const projects = [
  {
    title: "Medical Data Analysis Platform",
    description: "A cloud-based solution for analyzing and visualizing medical data in real-time, utilizing advanced AI algorithms.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    image: Image1,
    link: "#"
  },
  {
    title: "Pulse Oximeter Full Stack Application",
    description: "A medical platform designed to handle millions of transactions securely with real-time data processing.",
    technologies: ["Angular", "Express", "MySQL", "Azure"],
    image: Image2,
    link: "#"
  },
  {
    title: "Real-Time Heart Rate Analytics App",
    description: "A dynamic application providing real-time heart rate analytics using WebSocket for live data updates.",
    technologies: ["Vue.js", "Flask", "PostgreSQL", "Google Cloud"],
    image: Image3,
    link: "#"
  }
];

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

const Project = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }} key={index}>
          <motion.div 
            className="project-card"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="technologies">
                {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
};

export default Project;
