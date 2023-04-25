import React from "react";
import instagram from "../../components/Embeds/instagram.js";


export default function Social(){
    
    return(
        <div id="work-samples-nick" className="work-display">
        <div id="samplesHolder">
            <h2 className="section-title">
               Social Media Links!
            </h2>
        </div>
            <div>{instagram()}</div>
        </div>
    )
}