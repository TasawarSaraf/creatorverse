import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Card.css';
import { faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Card = ({id,name, description, socialMediaLinks, imageUrl}) =>{

    const navigate = useNavigate();


    const moreInfo = () => {
        /**navigate based on the user's id it will share that specific user's detail */
        navigate(`/view-creator/${id}`);
    }

    const editInfo = () => {
        /**navigate to the edit page based on the user's id */
        navigate(`/edit-creator/${id}`);
    }

    const platformIcons = {
        Instagram: faInstagram,
        Twitter: faXTwitter,
        YouTube: faYoutube,
      };
    
    return(
        /**this is the image that will be the background (grab from online so it can work)  */
        <div className='card-container' style={{backgroundImage: `url(${imageUrl})`}}>
        {/**this will apply to the container where the name and the two buttons are included  */}
            <div className='first-container'>
                <div className='name-container'>
                    {name}
                    
                </div>
                <div className='buttons-container'>
                    <button onClick={editInfo} className="info">
                         <FontAwesomeIcon icon={faPenToSquare} size="1x" />
                    </button>
                    <button onClick={moreInfo} className='edit'>
                          <FontAwesomeIcon icon={faInfo} size="1x" />
                    </button>
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
                        <FontAwesomeIcon className='font-awesome' icon={platformIcons[link.platform]} size="2x" style={{ color: 'white' }} />
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