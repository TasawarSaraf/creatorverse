import React from "react";
import './styles/Hero.css';
import {useNavigate} from 'react-router-dom';

const Hero = () =>{


    return (
        /* style={{backgroundImage: `url(${heroURL})`}*/
        <div className="hero">
            <div className="title">
                <h1>Creatorverse</h1>
            </div>

            <div className="buttons">
                <button onClick={() => navigate("view-creators")}>View All</button>
                <button onClick={()=> navigate("add-creator")}>Add Creator</button>
            </div>
        </div>
    )


};




export default Hero;
