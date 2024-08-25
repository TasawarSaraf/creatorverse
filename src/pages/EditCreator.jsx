import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./styles/EditCreator.css";


const EditCreator = () =>{
    /** this page is very similar to addCreator */
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    /**if the user wants to delete it will show a modal before finally cofirming to delete */

    const[showDeleteModal, setShowDeleteModal] = useState(false);


    useEffect(() =>{
        const getCreatorsDetails = async () =>{
            const {data, error} = await supabase.from("creators").select("*").eq("id", id).single();

            if(error){
                console.log("Could not get the user's data", error);
            } else{
                setName(data.name);
                setImageURL(data.imageURL);
                setDescription(data.description);
                
                data.url.forEach(link=>{
                    if (link.platform === "YouTube") setYoutube(link.url);
                    if (link.platform === "Twitter") setTwitter(link.url);
                    if (link.platform === "Instagram") setInstagram(link.url);
                })
            }
        };

        getCreatorsDetails();
    }, [id]);


    const editCreatorDetails = async (e) =>{
        e.preventDefault();

        const socialMediaLinks = [
            youtube && { platform: 'YouTube', url: youtube },
            twitter && { platform: 'Twitter', url: twitter },
            instagram && { platform: 'Instagram', url: instagram }
        ].filter(Boolean);


        const {error} = await supabase.from("creators").update({
                name: name,
                imageURL: imageURL,
                description: description,
                url: socialMediaLinks
        }).eq("id", id);

        if (error){
            console.log("Couldn't update the creator", error);
        } else{
            alert('Creator updated successfully!');
            /**so you can see the updated changes */
            navigate(`/view-creator/${id}`); 
        }
    };



    const deleteCreatorDetails = async () =>{
        const {error} = await supabase.from("creators").delete().eq("id", id);

        if (error){
            console.log("Could not delete the user from database!", error);
        } else{
            alert("User successfully deleted.");
            /**takes you back to the main page */
            navigate("/");
        }
    }



    return(

        /**same design as AddCreator.jsx */
        <div className="edit-creator-container">
            <h1>Edit Creator</h1>
            <form onSubmit={editCreatorDetails} className="edit-creator-form">
                <div className="edit-creator-form-item">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="edit-creator-form-item">
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        required
                    />
                </div>

                <div className="edit-creator-form-item">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <h2>Social Media Links</h2>
                <div className="edit-creator-form-item">
                    <label>YouTube:</label>
                    <input
                        type="text"
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                    />
                </div>

                <div className="edit-creator-form-item">
                    <label>Twitter:</label>
                    <input
                        type="text"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>

                <div className="edit-creator-form-item">
                    <label>Instagram:</label>
                    <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </div>

                <div className="edit-creator-form-buttons">
                    <button type="submit" className="submit-button">
                        Update
                    </button>

                    <button onClick={() => setShowDeleteModal(true)} type="button" className="delete-button">
                        Delete
                    </button>
                </div>
            </form>

            {showDeleteModal && (
                <div className="modal-overlay">

                    <div className="delete-modal-content"> 
                            <h2>Are you sure you want to delete this user?</h2>

                            <div className="modal-buttons">
                                <button
                                    className="confirm-button"
                                    onClick={deleteCreatorDetails}
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


export default EditCreator;