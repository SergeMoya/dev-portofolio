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
  align-items: flex-start;
  
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
    <Main>
      <Grid>
        <SectionHeader>
          <h1>About Me</h1>
        </SectionHeader>
        <Row>
          <Column>
            <TextContainer>
              <p className="description">
                I get excited about building tech that makes a real difference. With my background in full-stack development and a Ph.D. in Electrical Engineering, I bring both deep technical knowledge and practical coding skills to every project.
              </p>
              <p className="description">
                Recently, I led the development of a mobile platform using MERN and AWS, making the service more accessible while reducing operational costs by 20%. Before that, as a Senior Reliability Engineer, I discovered my passion for building robust systems – from automated testing frameworks to intuitive data dashboards.
              </p>
              <p className="description">
                My Ph.D. research in <span className="highlight">Electrical Engineering</span> gives me a unique edge when it comes to optimization and real-time processing. But I'm not all about code! You'll often find me driving through Taiwan's mountain roads, trying out local dishes, or working on my fitness.
              </p>
              <p className="tech-stack">
                Tech Stack: React Native • React.js • Node.js • Machine Learning
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