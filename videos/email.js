import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./email.css";




function Email() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);



    const handleSubmit = (event) => {

        event.preventDefault();

        setSubmitted(true); 

    };





    if (submitted) {

        navigate('/video');

    }



    return (

        <div className="container">

            <div className="fumble">

                <header>WELCOME TO FUMBLE.COM</header>

                <div className="form">

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="email">Email:</label>

                        <input type="email" required id="email" />

                        <button type="submit">Submit</button>

                    </form>

                </div>

            </div>

        </div>

    );

}



export default Email;
