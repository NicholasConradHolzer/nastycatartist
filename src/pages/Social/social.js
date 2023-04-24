import React from "react";
import ProjMod from "../../components/ProjMod/projmod.js";
import nyango from "../../assets/images/project-nyango.PNG";
import watchBox from "../../assets/images/project-box.PNG";
import runBuddy from "../../assets/images/project-runbuddy.PNG";
import instagram from "../../components/Embeds/instagram.js";
// import  from "../../assets/images/";


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