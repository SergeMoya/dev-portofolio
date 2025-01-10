import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/image1.jpg';
import SectionHeader from './common/SectionHeader';

const Main = styled.main`
  padding: 4rem 2rem;
  background: #090b20;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  padding: 2rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  
  img {
    width: 85%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 900px) {
    img {
      width: 70%;
    }
  }
`;

const TextContainer = styled.div`
  color: #ffffff;
  padding-top: 1rem;
  
  
  .description {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #B3B9C5;
    margin-bottom: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.2px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .tech-stack {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #B3B9C5;
    margin-bottom: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  .highlight {
    color: #E4E9F1;
    font-weight: 500;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(255, 255, 255, 0.1);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    .description {
      font-size: 1.05rem;
      line-height: 1.8;
    }
    .tech-stack {
      font-size: 1rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <Main id="about">
      <Grid>
        <SectionHeader title="About Me" />
        <Row>
          <Column>
            <TextContainer>
              <p className="description">
                I'm a <span className="highlight">Full-Stack Engineer</span> with a <span className="highlight">Ph.D. in Electrical Engineering</span>, combining deep technical expertise with hands-on engineering skills to deliver impactful solutions. I recently architected a <span className="highlight">HIPAA-compliant</span> pulse oximeter companion app using <span className="highlight">React Native</span>, <span className="highlight">Node.js/Express</span>, and <span className="highlight">AWS</span>. This project resulted in the successful launch of the company's first software product and established its presence in the software industry.
              </p>
              <p className="description">
                Previously, as a <span className="highlight">Senior Reliability Engineer</span>, I developed automated testing frameworks and data processing systems using <span className="highlight">Python</span> and <span className="highlight">React</span>, building scalable architectures for complex semiconductor workflows. Moreover, my Ph.D. research background enables me to bridge theoretical concepts with practical implementations, particularly valuable in projects requiring <span className="highlight">hardware-software integration</span>.
              </p>
              <p className="description">
                When not coding, I am driving Taiwan's mountain roads and exploring local cuisine, maintaining creativity and fresh perspectives.
              </p>
              <p className="tech-stack">
                Tech Focus: <span className="highlight">Full-Stack Development (MERN)</span> • <span className="highlight">Algorithms</span> • <span className="highlight">System Architecture</span> & <span className="highlight">AWS</span> • <span className="highlight">Automated Testing</span> & <span className="highlight">CI/CD</span> • <span className="highlight">Real-time signal Processing</span>
              </p>
            </TextContainer>
          </Column>
          <Column>
            <ImageContainer>
              <img src={aboutImage} alt="About Me" />
            </ImageContainer>
          </Column>
        </Row>
      </Grid>
    </Main>
  );
}

export default AboutMe;