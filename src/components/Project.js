import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/Project.css';
import SectionHeader from './common/SectionHeader';
import Image1 from '../images/Project1.png';
import Image2 from '../images/Project2.png';
import Image3 from '../images/Project3.png';
import Image4 from '../images/Project4.png';   
import Image5 from '../images/Project5.png';  
import Project1PDF from '../pdf-project/Project1.pdf';
import Project2PDF from '../pdf-project/Project2.pdf';
import Project3PDF from '../pdf-project/Project3.pdf';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Pulse Oximeter Mobile Appication",
    description: "Professional project - A sophisticated healthcare monitoring application that provides real-time blood oxygen (SpO2) and heart rate measurements through Bluetooth-enabled pulse oximeters. Features include live data visualization, historical data tracking, multi-language support, and secure user authentication with AWS cloud integration for reliable data storage and analysis.",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "i18next",
      "JWT Authentication",
      "AWS Lambda",
      "AWS S3",
      "AWS EC2",
      "MongoDB Atlas",
      "WebSocket"
    ],
    image: Image1,
    link: "https://play.google.com/store/apps/details?id=com.acarepulseoximetereapp&hl=en-US&ah=A7FWPNVKIwsv8-xQXW9U-bADgIE",
    learnMore: Project1PDF
  },
  {
    title: "Decentralized Finance (DeFi) Application",
    description: "Personal side project - A comprehensive decentralized finance platform enabling seamless management of digital assets and participation in blockchain protocols. Features include real-time portfolio tracking, multi-chain support, automated yield farming strategies, liquidity pool management, and advanced analytics dashboard with performance metrics and risk assessment tools.",
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
    description: "Personal side project - A professional-grade cryptocurrency trading platform integrated with Binance exchange, offering real-time market analysis and automated trading capabilities. Features include advanced order book visualization, customizable trading strategies, risk management tools, performance analytics, and automated trade execution with WebSocket integration.",
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
  },
  {
    "title": "Machine Learning-Based Malaria Incidence Prediction System",
    "description": "Research project - A machine learning system achieving 82.1% accuracy in predicting malaria incidence across African regions. Features include Random Forest ensemble with temporal cross-validation, automated data preprocessing pipeline, and epidemiological pattern analysis. Processes health data from 50 countries to optimize disease prevention strategies.",
    "technologies": [
      "Python 3.12",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "XGBoost",
      "SHAP",
      "Flask",
      "React 19",
      "Material-UI 6",
      "Chart.js 4",
      "Matplotlib",
      "Seaborn",
      "Axios",
      "Node.js"
    ],
    "image": Image4,
    "link": "https://ai-malaria-frontend.onrender.com/",
    "learnMore": null
  },
  {
    title: "Interactive Developer Portfolio",
    description: "Personal project - A modern, interactive developer portfolio showcasing professional experience and projects. Features include 3D graphics, smooth animations, particle effects, responsive design, and an engaging user interface. The portfolio demonstrates expertise in modern web technologies and attention to user experience.",
    technologies: [
        "React.js",
        "Three.js",
        "React Three Fiber",
        "Framer Motion",
        "Styled Components",
        "TSParticles",
        "React Tilt",
        "React Router",
        "FontAwesome",
        "Vercel Analytics"
    ],
    image: Image5,
    link: window.location.origin,
    learnMore: null
  }
];

const publications = [
  {
    title: "Evaluation of an intelligent edge computing system for the hospital intensive care unit",
    doi: "https://doi.org/10.1109/ECBIOS51820.2021.9510541",
    focus: "Edge Computing & IoT",
    keywords: ["Edge Computing", "Real-time Systems"  , "Distributed Systems", "System Architecture", "Healthcare IoT",]
  },
  {
    title: "A Novel Method for Baroreflex Sensitivity Estimation Using Modulated Gaussian Filter",
    doi: "https://doi.org/10.3390/s22124618",
    focus: "Algorithm Development",
    keywords: ["Real-time Processing", "Algorithm Optimization", "Data Analysis", "Performance Tuning", "Statistical Analysis"]
  },
  {
    title: "Fabrication and characterization of an aptamer-based N-type silicon nanowire FET biosensor for VEGF detection",
    doi: "https://doi.org/10.1007/s40846-020-00552-5",
    focus: "System Integration",
    keywords: ["Data Pipeline Development", "System Integration", "Real-time Monitoring", "Sensor Data Analysis", "Hardware-Software Interface"]
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
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          className="projects-swiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
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
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          style={{ marginRight: '8px' }}
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Project
                      </a>
                      {/*<a href={project.learnMore} target="_blank" rel="noopener noreferrer" className="project-button">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          style={{ marginRight: '8px' }}
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        Learn More
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SectionHeader>
          <h1>Featured Research</h1>
        </SectionHeader>
        <div className="publications-container">
          {publications.map((publication, index) => (
            <div className="publication-card" key={index}>
              <div className="publication-focus">{publication.focus}</div>
              <h3>{publication.title}</h3>
              <div className="publication-keywords">
                {publication.keywords.map((keyword, keywordIndex) => (
                  <span key={keywordIndex} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="publication-year">{publication.year}</p>
              <a href={publication.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ marginRight: '8px' }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View Publication
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;