import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./styles/ViewCreator.css";


const ViewCreator = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    /**the creator's object which insludes the name, description, imageURL, socialMediaLink this will directly linked with the id 
     * which is grabbed based on the parameter
     */
    const [creator, setCreator] = useState(null);


    const [showDeleteModal, setShowDeleteModal] = useState(false);


    useEffect(() =>{
        const getCreatorsDetails = async () =>{
            const {data, error} = await supabase.from('creators').select("*").eq('id', id).single();

            if (error){
                console.log("Error viewing the creator's details " + error);
            } else{
                /**if not error  */
                setCreator(data);
            }
        };

        getCreatorsDetails();



    }, [id]);


    const platformIcons = {
        Instagram: faInstagram,
        Facebook: faFacebook,
        YouTube: faYoutube,
    };


    const editCreatorDetail = () =>{
        navigate(`/edit-creator/${id}`)
    }

    const deleteCreatorDetail = async () => {
        const {error} = await supabase.from("creators").delete().eq("id", id);

        if (error){
            console.log("Could not delete the user from database!", error);
        } else{
            alert("User successfully deleted.");
            /**takes you back to the main page */
            navigate("/");
        }
    }


    if (!creator) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }


    return(

        
        <div className="creator-details-container">
            <div className="creator-image-container">
                <img src={creator.imageURL} alt={creator.name} />
            </div>

            <div className="creator-info-container">
                <h1 className="creator-name">{creator.name}</h1>
                <p className="creator-description">{creator.description}</p>

                <div className="links-container">
                    {creator.url && creator.url.map((link, index)  =>(
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

                <div className="buttons-container">
                    <button onClick={editCreatorDetail} className="edit-button">
                        Edit
                    </button>
                    <button onClick={()=> setShowDeleteModal(true)} className="delete-button">
                        Delete
                    </button> 

                </div>
            </div>


            {showDeleteModal && (
                <div className="modal-overlay">

                    <div className="delete-modal-content"> 
                            <h2>Are you sure you want to delete this user?</h2>

                            <div className="modal-buttons">
                                <button
                                    className="confirm-button"
                                    onClick={deleteCreatorDetail}
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    Never mind
                                </button>
                            </div>
                    </div>

                </div>
            )}
            


        </div>
    )
}


export default ViewCreator;
