import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../images/art2.jpg';
import profileImage from '../images/acare_profile.png';  

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

const SocialIcon = styled.a`
  color: #ffffff;
  margin: 0 1rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;

  &:hover {
    color: #1da1f2; // Or any color you prefer
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
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
          <SocialMediaContainer>
            <SocialIcon href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
              <Tooltip>GitHub</Tooltip>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
              <Tooltip>LinkedIn</Tooltip>
            </SocialIcon>
            <SocialIcon href="mailto:your-email@gmail.com" target="_blank" aria-label="Gmail">
              <FontAwesomeIcon icon={faEnvelope} />
              <Tooltip>Gmail</Tooltip>
            </SocialIcon>
            <SocialIcon href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
              <Tooltip>Instagram</Tooltip>
            </SocialIcon>
            <SocialIcon href="https://scholar.google.com/citations?user=yourprofile" target="_blank" aria-label="Google Scholar">
              <FontAwesomeIcon icon={faGoogleScholar} />
              <Tooltip>Google Scholar</Tooltip>
            </SocialIcon>
          </SocialMediaContainer>
        </Grid>
      </Main>
    </>
  );
}

export default AboutMe;