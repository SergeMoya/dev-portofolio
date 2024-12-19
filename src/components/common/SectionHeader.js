import styled from 'styled-components';

const SectionHeader = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  color: #fff;
  padding: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #2ecc71;
    border-radius: 2px;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 700;
  }
`;

export default SectionHeader; 