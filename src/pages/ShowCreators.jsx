import React, {useEffect, useState} from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import "./styles/ShowCreators.css";

const ShowCreators = () =>{
    /**will be an array of creators */
    const [creators, setCreators] = useState([]);

    /**will have to use useEffect to "get" those creators */

    useEffect(() =>{
        /**grab from the creator table */

        const fetchCreators = async () =>{
            const {data, error} = await supabase.from('creators').select('id,name,url,description, imageURL');

            /**error check  */

            if(error){
                console.log("Error couldn't fetch the data for ShowCreators page", error);
            } else{
                /**if no error set the state with the data grabbed from supabase */
                setCreators(data);
            }
        };

        fetchCreators(); 
        
    }, [])
    return(

        
        <div className="creators-container">
        
            <div className="creators-list">
                {
                    
                 creators.map((creator)=>(

                    <Card
                        key={creator.name} // Use a unique key, assuming 'name' is unique here
                        id={creator.id}
                        name={creator.name}
                        description={creator.description}
                        socialMediaLinks={creator.url} // Pass the array directly
                        imageUrl={creator.imageURL}
                     />
                    
                
                 ))}
            </div>
        </div>
    )

}


export default ShowCreators;