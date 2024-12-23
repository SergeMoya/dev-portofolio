import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';
import SectionHeader from './common/SectionHeader';
import Image1 from '../images/Project1.png';
import Image2 from '../images/project2.png';
import Image3 from '../images/Project3.png';
import Project1PDF from '../pdf-project/Project1.pdf';
import Project2PDF from '../pdf-project/Project2.pdf';
import Project3PDF from '../pdf-project/Project3.pdf';

const projects = [
  {
    title: "Acare Pulse Oximeter Mobile App",
    description: "A sophisticated healthcare monitoring application that provides real-time blood oxygen (SpO2) and heart rate measurements through Bluetooth-enabled pulse oximeters. Features include live data visualization, historical data tracking, customizable alarms, multi-language support, and secure user authentication with AWS cloud integration for reliable data storage and analysis.",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS Services",
      "Bluetooth Low Energy (BLE)",
      "i18next",
      "JWT Authentication",
      "React Navigation",
      "AWS Lambda",
      "AWS S3",
      "AWS CloudWatch",
      "MongoDB Atlas",
      "WebSocket"
    ],
    image: Image1,
    link: "https://play.google.com/store/apps/details?id=com.acarepulseoximetereapp&hl=en-US&ah=A7FWPNVKIwsv8-xQXW9U-bADgIE",
    learnMore: Project1PDF
  },
  {
    title: "Decentralized Finance (DeFi) Application",
    description: "A comprehensive decentralized finance platform enabling seamless management of digital assets and participation in blockchain protocols. Features include real-time portfolio tracking, multi-chain support, automated yield farming strategies, liquidity pool management, and advanced analytics dashboard with performance metrics and risk assessment tools.",
    technologies: [
      "React.js",
      "TypeScript",
      "Ethers.js",
      "Web3-React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material-UI",
      "Tailwind CSS",
      "Axios"
    ],
    image: Image2,
    link: "https://defi-dashboard-gold.vercel.app/",
    learnMore: Project2PDF
  },
  {
    title: "High-Frequency Trading System",
    description: "A professional-grade cryptocurrency trading platform integrated with Binance exchange, offering real-time market analysis and automated trading capabilities. Features include advanced order book visualization, customizable trading strategies, risk management tools, performance analytics, and automated trade execution with WebSocket integration.",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Tremor Charts",
      "Lightweight Trading Charts",
      "Node.js",
      "Express.js",
      "WebSocket",
      "Binance API",
      "CryptoJS",
      "Jest",
      "React Testing Library"
    ],
    image: Image3,
    link: "https://hft-system.vercel.app/",
    learnMore: Project3PDF
  }
];

const publications = [
  {
    title: "Evaluation of an intelligent edge computing system for the hospital intensive care unit",
    year: "2021",
    doi: "https://doi.org/10.1109/ECBIOS51820.2021.9510541",
    focus: "Edge Computing & IoT",
    keywords: ["Healthcare IoT", "Edge Computing", "Real-time Systems"]
  },
  {
    title: "A Novel Method for Baroreflex Sensitivity Estimation Using Modulated Gaussian Filter",
    year: "2022",
    doi: "https://doi.org/10.1007/s40846-020-00550-7",
    focus: "Algorithm Development",
    keywords: ["Real-time Processing", "Algorithm Optimization", "Healthcare Systems"]
  },
  {
    title: "Fabrication and characterization of an aptamer-based N-type silicon nanowire FET biosensor for VEGF detection",
    year: "2020",
    doi: "https://doi.org/10.1007/s40846-020-00552-5",
    focus: "System Integration",
    keywords: ["Digital Healthcare", "Sensor Systems", "Data Processing"]
  }
];

const Project = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <SectionHeader>
          <h1>Featured Projects</h1>
        </SectionHeader>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                  <div className="button-container">
                    <a 
                      href={project.link}
                      className="project-button"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionHeader>
          <h1>Featured Research</h1>
        </SectionHeader>
        <div className="publications-container">
          {publications.map((pub) => (
            <a 
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
              key={pub.title}
            >
              <div className="publication-focus">{pub.focus}</div>
              <h3>{pub.title}</h3>
              <div className="keywords">
                {pub.keywords.map((keyword, idx) => (
                  <span key={idx} className="keyword">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="publication-year">{pub.year}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;