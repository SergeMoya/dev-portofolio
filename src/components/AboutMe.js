import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
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

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #141E30;
  margin-top: 2rem;
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

const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the icon */
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size:0.75rem;

  /* Arrow */
  &::after {
    content: "";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
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
