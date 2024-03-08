import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f3;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const VideoWrapper = styled.div`
  border: 2px solid #4a90e2; /* Microsoft theme blue */
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const TutorialPage = () => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const handleVolumeChange = (event) => {
    const value = event.target.value;
    setVolume(value);
    videoRef.current.volume = value;
  };

  const handlePlaybackRateChange = (event) => {
    const value = parseFloat(event.target.value);
    setPlaybackRate(value);
    videoRef.current.playbackRate = value;
  };

  return (
    <Container>
      <VideoWrapper>
        <Video
          controls
          ref={videoRef}
          volume={volume}
          playbackRate={playbackRate}
        >
          <source src="./bilder/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Controls>
          <button onClick={togglePlay}>{'Play/Pause'}</button>
          <button onClick={toggleFullScreen}>{'Full Screen'}</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ backgroundColor: '#4a90e2' }} /* Microsoft theme blue */
          />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={playbackRate}
            onChange={handlePlaybackRateChange}
            style={{ backgroundColor: '#4a90e2' }} /* Microsoft theme blue */
          />
          {/* Add more controls as needed */}
        </Controls>
      </VideoWrapper>
    </Container>
  );
};

export default TutorialPage;
