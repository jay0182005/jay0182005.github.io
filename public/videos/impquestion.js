import React, { useState, useRef, useEffect } from "react";
import './IrrelevantQuestion.css';

function ImpQuestion() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("I HAVE A NOT VERY IMPORTANT QUESTION FOR YOU");
  const [yesClicked, setYesClicked] = useState(false);
  const noButtonRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    const container = document.querySelector(".question-wrapper");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);
    noButtonRef.current.style.position = "absolute";
    noButtonRef.current.style.left = `${randomX}px`;
    noButtonRef.current.style.top = `${randomY}px`;
  };

  const handleClick = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    changeText(nextCount);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  useEffect(() => {
    if (yesClicked && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          if (videoRef.current.requestFullscreen) {
            await videoRef.current.requestFullscreen();
          } else if (videoRef.current.webkitRequestFullscreen) {
            await videoRef.current.webkitRequestFullscreen();
          } else if (videoRef.current.msRequestFullscreen) {
            await videoRef.current.msRequestFullscreen();
          }
        } catch (error) {
          console.error("Error playing video:", error);
        }
      };
      playVideo();
    }
  }, [yesClicked]);

  const changeText = (nextCount) => {
    switch (nextCount) {
      case 1:
        setText("LIKE REALLY REALLY NOT IMPORTANT");
        break;
      case 2:
        setText("ARE YOU READY?");
        break;
      default:
        break;
    }
  };

  return (
    <div className="question-wrapper">
      {yesClicked ? (
        <div className="video-container">
          <video
            ref={videoRef}
            width="600"
            controls
            playsInline
            src="/videos/yesvideo.mp4"
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : count !== 3 ? (
        <div className="question-card">
          <h1 className="title">{text}</h1>
          <button className="next-button" onClick={handleClick}>Next</button>
        </div>
      ) : (
        <div className="city-selection">
          <h1>Will you be my girlfriend?</h1>
          <div className="button-group">
            <button onClick={handleYesClick}>Yes</button>
            <button id="no" ref={noButtonRef} onMouseOver={handleMouseOver}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImpQuestion;