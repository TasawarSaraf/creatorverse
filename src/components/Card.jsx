import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Card.css';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Card = ({name, description, socialMediaLinks, imageUrl}) =>{

    const platformIcons = {
        Instagram: faInstagram,
        Facebook: faFacebook,
        YouTube: faYoutube,
      };
    
    return(
        /**this is the image that will be the background of the  */
        <div className='card-container' style={{backgroundImage: `url(${imageUrl})`}}>
        {/**this will apply to the container where the name and the two buttons are included  */}
            <div className='first-container'>
                <div className='name-container'>
                    {name}
                </div>
                <div className='buttons-container'>
                    <button className="info">Info</button>
                    <button className='edit'>Edit</button>
                </div>
            </div>
            {/**this will apply to the container where the social media links are included */}
            <div className='second-container'>
            {/**we will map the icons based on the platforms */}
            {/**<FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                {socialMediaLinks.map(link => (
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-icon-link"
                        key={link.platform}
                    >
                        <FontAwesomeIcon icon={platformIcons[link.platform]} size="2x" />
                    </a>
                ))}
            </div>
            {/**this will apply to the container where the description are included */}
            <div className='third-container'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;