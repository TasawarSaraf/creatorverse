import React, {useState} from "react";
import { supabase } from "../client";
import './styles/AddCreator.css';



const AddCreator = () =>{
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');


    const addCreator = async (e) =>{
        e.preventDefault();

        /**make sure at least one social media link is provided otherwise sent an error */

        if(!youtube && !twitter && !instagram){
            alert("Please provide at least one social media link!");
            return;
        }

        /**make sure to store the social media links in an array since it is type "jsonb" */
        /**Also making sure if youtube or twitter or instagram only then add the object to the socialMediaLinks array
         * Also make sure to have at least one!
         */
        const socialMediaLinks = [
            youtube && {platform: 'YouTube', url: youtube},
            twitter && {platform: 'Twitter', url: twitter},
            instagram && {platform: 'Instagram', url:instagram}
        ].filter(Boolean); // filters out undefined values

        const {data, error} = await supabase.from('creators').insert([
            {
                name: name,
                url: socialMediaLinks,
                description: description,
                imageURL: imageURL
            }
        ]);

        if (error){
            console.log("Could not add creator");
        } else{
            alert('Creator added successfully!');
            // Clear form fields (for another creator if needs to be added)
            setName('');
            setImageURL('');
            setDescription('');
            setYoutube('');
            setTwitter('');
            setInstagram('');
        }
    } 


    /** this is for deleeting the creator */
    const deleteCreator = async () =>{
        alert("Deleted.");
    }


    return (

        <div className="add-creator-container">
            <h1>Add Creator</h1>

            <form onSubmit={addCreator} className="add-creator-form">
                <div className="add-creator-form-item">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="add-creator-form-item">
                    <label>Image:</label>
                    <input
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        required
                    />
                </div>

                <div className="add-creator-form-item">
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <h1>Social Media Links</h1>
                <div className="add-creator-form-item">
                    <label>Youtube:</label>
                    <input
                        type="text"
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                        required
                    />
                </div>


                <div className="add-creator-form-item">
                    <label>Twitter:</label>
                    <input
                        type="text"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        required
                    />
                </div>


                <div className="add-creator-form-item">
                    <label>Instagram:</label>
                    <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        required
                    />
                </div>


                <div className="add-creator-form-buttons">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    <button type="button" onClick={deleteCreator} className="delete-button">
                        Delete
                    </button>
                </div>
            </form>
        </div>
    )
    
}


export default AddCreator;