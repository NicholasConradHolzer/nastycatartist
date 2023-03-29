import React from "react";
import Nav from "../Nav/nav.js";

export default function introHead(props){
    return(
        <div id="header">
            <Nav 
            setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}