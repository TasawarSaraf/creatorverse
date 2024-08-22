import React from 'react';
import './styles/Card.css';


const Card = ({name, description, url, imageUrl}) =>{
    return(
        /**this is the image that will be the background of the  */
        <div className='card-container' style={{backgroundImage: `url(${imageUrl})`}}>
        {/**this will apply to the container where the name and the two buttons are included  */}
            <div className='first-container'>
                <div className='name-container'>
                    {name}
                </div>
                <div className='buttons-container'>
                    <button className="info"></button>
                    <button className='edit'></button>
                </div>
            </div>
            {/**this will apply to the container where the social media links are included */}
            <div className='second-container'>

            </div>
            {/**this will apply to the container where the description are included */}
            <div className='third-container'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;