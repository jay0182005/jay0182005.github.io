// Video.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Video.css";

function Video() {
  const [clicked, setClicked] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => setClicked(true);

  const handleVideoEnd = () => {
    navigate('/question');
  };

  useEffect(() => {
    if (clicked && videoRef.current) {
      const videoElement = videoRef.current;
      const playFullscreen = async () => {
        try {
          await videoElement.play();
          if (videoElement.requestFullscreen) {
            await videoElement.requestFullscreen();
          } else if (videoElement.webkitRequestFullscreen) {
            await videoElement.webkitRequestFullscreen();
          } else if (videoElement.msRequestFullscreen) {
            await videoElement.msRequestFullscreen();
          }
        } catch (err) {
          console.error("Error attempting to enable fullscreen mode", err);
        }
      };
      playFullscreen();
    }
  }, [clicked]);

  return (
    <div className="container">
      {!clicked ? (
        <div className="welcome-content">
          <h1 className="title">
            Are you ready for the coolest presentation ever?
          </h1>
          <div className="button-group">
            <button onClick={handleClick}>Yes</button>
            <button onClick={handleClick}>Yes</button>
          </div>
        </div>
      ) : (
        <div className="video-content">
          <h1>Video Player</h1>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              controls
              onEnded={handleVideoEnd}
              autoPlay
            >
              <source src="/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;