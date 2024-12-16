import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/art2.jpg';

const Main = styled.main`
  padding: 2rem;
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
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }
`;

const Column = styled.div`
  padding: 1rem;
  flex: 1;

  @media (max-width: 900px) {
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  color: #ffffff;
  font-size: 1.2rem;
  text-align: justify;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 2rem !important;
  }

  p {
    margin-bottom: 2rem !important;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const AboutMe = () => {
  return (
    <Main>
      <Grid>
        <Row>
          <Column>
            <TextContainer>
              <h1 style={{ color: '#4A90E2' }}>About Me</h1>
              <p style={{ lineHeight: '1.8' }}>
                Full Stack Developer crafting scalable solutions in mobile health, blockchain, and AI. Built a BLE-enabled health monitoring app, DeFi portfolio systems, and ML-driven malaria prevention analytics for Africa.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                Tech stack: React Native, React.js, Node.js, Machine Learning. Always eager to tackle new challenges with emerging technologies.
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