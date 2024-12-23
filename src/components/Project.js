import React from 'react';
import { Tilt } from 'react-tilt';
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
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
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
            <Tilt
              className="Tilt"
              options={{
                max: 15,
                scale: 1,
                speed: 450,
                glare: true,
                "max-glare": 0.5,
              }}
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
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;