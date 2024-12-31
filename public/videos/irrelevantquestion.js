import React, { useState } from "react";
import './IrrelevantQuestion.css';
import { useNavigate } from "react-router-dom";

function IrrelevantQuestion() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("I HAVE A VERY IMPORTANT QUESTION FOR YOU");
    const navigate = useNavigate();

    const handleClick = () => {
        const nextcount = count + 1;
        setCount(nextcount);
        changeText(nextcount);
    }

    const changeText = (nextcount) => {
        switch(nextcount) {
            case 1:
                setText("LIKE REALLY REALLY IMPORTANT");
                break;
            case 2:
                setText("ARE YOU READY?");
                break;
            default:
                break;
        }
    }

    const cityClick = () => {
        navigate('/notsoimpquestion');
    }

    return (
        <div className="question-wrapper">
            {count !== 3  ? (
                <div className="question-card">
                    <h1 className="title">{text}</h1>
                    <button className="next-button" onClick={handleClick}>Next</button>
                </div>
            ) : (
                <div className="city-selection">
                    <h1>What is your favorite city?</h1>
                    <div className="button-group">
                        <button onClick={cityClick}>Bangalore</button>
                        <button onClick={cityClick}>Lucknow</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IrrelevantQuestion;