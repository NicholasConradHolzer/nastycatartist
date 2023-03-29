import React from "react";

export default function Nav(props){

    const introHead = () =>{
        if(props.currentCategory==="Intro"){
            return "introNav"
        } else {
            return "stanHead"
        }
    }
    
//conversion of these disparet functions

    
    return(
        <div id="nav" className={ introHead() }>
            <ul>
                <li>
                    <a id="music" className={props.currentCategory === "Music" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Music")}>Music</a>
                </li>
                
                <li>
                    <a id="bio" className={props.currentCategory === "Bio" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Bio")}>Bio</a>
                </li>

                <li>
                    <a id="social" className={props.currentCategory === "Social" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Social")}>Social</a>
                </li>
            </ul>
        </div>
    )
}