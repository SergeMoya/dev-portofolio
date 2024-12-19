import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/art2.jpg';

const Main = styled.main`
  padding: 4rem 2rem;
  background: #090b20;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const TextContainer = styled.div`
  color: #ffffff;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    font-weight: 700;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #B3B9C5;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .tech-stack {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #B3B9C5;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .highlight {
    color: #D4D9E1;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    .description, .tech-stack {
      font-size: 1rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <Main>
      <Grid>
        <Row>
          <Column>
            <TextContainer>
              <h1>About Me</h1>
              <p className="description">
                Full Stack Developer crafting scalable solutions in 
                <span className="highlight"> mobile health</span>, 
                <span className="highlight"> blockchain</span>, and 
                <span className="highlight"> AI</span>. Built a BLE-enabled health 
                monitoring app, DeFi portfolio systems, and ML-driven malaria 
                prevention analytics for Africa.
              </p>
              <p className="tech-stack">
                Tech Stack: React Native • React.js • Node.js • Machine Learning
              </p>
              <p className="description">
                Always eager to tackle new challenges with emerging technologies 
                and create impactful solutions that make a difference.
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