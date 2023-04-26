import React from "react";
import combination from "./combination.js"

export default function instagram(){
    
    return(
        <div 
        dangerouslySetInnerHTML={{__html: combination()}}
        />
    );
}