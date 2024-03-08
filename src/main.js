import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from './bilde/1.png';
import image2 from './bilde/2.png';
import image3 from './bilde/3.png';
import image4 from './bilde/4.png';
import image5 from './bilde/5.png';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden; /* Hide overflow to prevent blurred area from showing outside */
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const BlurredArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2); /* Adjust the opacity as needed */
  backdrop-filter: blur(10px); /* Apply blur effect */
  padding: 50px; /* Redusert padding for å gi mer mellomrom mellom innholdet og kanten av boksen */
  border-radius: 2px;
  width: 25%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Plasser innholdet midt i vertikal retning */
  gap: 20px; /* Legg til litt avstand mellom elementene */
`;


const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
`;


const Button = styled.button`
margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2); /* Light white with transparency */
  color: white;
  
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005a9e;
  }
`;

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTutorialButtonClick = () => {
    window.location.href = '/tutorial';
  };

  const handleQuizButtonClick = () => {
    window.location.href = '/quiz';
  };

  return (
    <AppContainer>
      <BackgroundImage src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <BlurredArea>
        <Title>Windows Server</Title>
        <Button onClick={handleTutorialButtonClick}>Gå til tutorial side</Button>
        <Button onClick={handleQuizButtonClick}>Prøv quiz</Button>
      </BlurredArea>
    </AppContainer>
  );
};

export default App;
