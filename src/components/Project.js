import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import '../styles/Project.css';
import SectionHeader from './common/SectionHeader';
import Image1 from '../images/Project1.png';
import Image2 from '../images/Project2.png';
import Image3 from '../images/Project3.png';
import Project1PDF from '../pdf-project/Project1.pdf';
import Project2PDF from '../pdf-project/Project2.pdf';
import Project3PDF from '../pdf-project/Project3.pdf';

const projects = [
  {
    title: "Medical Data Analysis Platform",
    description: "A cloud-based solution for analyzing and visualizing medical data in real-time, utilizing advanced AI algorithms.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    image: Image1,
    link: "https://play.google.com/store/apps/details?id=com.acarepulseoximetereapp&hl=en-US&ah=A7FWPNVKIwsv8-xQXW9U-bADgIE",
    learnMore: Project1PDF
  },
  {
    title: "Pulse Oximeter Full Stack Application",
    description: "A medical platform designed to handle millions of transactions securely with real-time data processing.",
    technologies: ["Angular", "Express", "MySQL", "Azure"],
    image: Image2,
    link: "https://defi-dashboard-gold.vercel.app/",
    learnMore: Project2PDF
  },
  {
    title: "Real-Time Heart Rate Analytics App",
    description: "A dynamic application providing real-time heart rate analytics using WebSocket for live data updates.",
    technologies: ["Vue.js", "Flask", "PostgreSQL", "Google Cloud"],
    image: Image3,
    link: "https://hft-system.vercel.app/",
    learnMore: Project3PDF
  }
];

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

const Project = () => {
  const handleLearnMore = (pdfPath) => {
    if (pdfPath && pdfPath !== "#") {
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <>
      <SectionHeader>
        <h1>Selected Projects</h1>
      </SectionHeader>
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
                <div className="button-container">
                  <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
                  {/*<button onClick={() => handleLearnMore(project.learnMore)} className="project-button learn-more">Learn More</button>*/}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default Project;