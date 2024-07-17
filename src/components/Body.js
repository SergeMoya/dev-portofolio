import React from 'react';
import styled from 'styled-components';
import aboutImage from '../images/art2.jpg';  // Make sure this is Picture 1
import profileImage from '../images/acare_profile.png';  // This is Picture 2

const Main = styled.main`
  padding: 2rem;
  background: linear-gradient(to right, #243B55, #141E30);
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
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const AboutMe = () => {
  return (
    <>
      <Main>
        <Grid>
          <Row>
            <Column>
              <TextContainer>
                <h1>About Us</h1>
                <p>With Acare App, you can easily connect to our company's pulse oximeter and view your real-time measurement.</p>
              </TextContainer>
            </Column>
            <Column>
              <ImageContainer>
                <img src={aboutImage} alt="About Me" />
              </ImageContainer>
            </Column>
          </Row>
          <Row>
            <Column>
              <TextContainer>
                <p>Detailed information about the application features, user benefits, and more technical insights.</p>
              </TextContainer>
            </Column>
            <Column>
              <ImageContainer>
                <img src={profileImage} alt="Acare Profile" />
              </ImageContainer>
            </Column>
          </Row>
        </Grid>
      </Main>
    </>
  );
}

export default AboutMe;