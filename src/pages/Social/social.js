import React from "react";
import ProjMod from "../../components/ProjMod/projmod.js";
import nyango from "../../assets/images/project-nyango.PNG";
import watchBox from "../../assets/images/project-box.PNG";
import runBuddy from "../../assets/images/project-runbuddy.PNG";
import instagram from "../../components/Embeds/instagram.js";
// import  from "../../assets/images/";


export default function Social(){
    const projectArray = [
        {
            title: 'Fanpage: Nyango-Starr',
            image: nyango,
            alt:'homepage for Nyango-Starr Fanclub',
            linkDeployed: 'https://nicholasconradholzer.github.io/NHolzerNyangoStarr/',
            // linkGithub:'',
            description:'A Fanpage for Japanese Mascot/Drummer/Apple-Cat Nyango Starr; featuring embedded youtube video as a background color for the site.',
            tech:''
        },
        {
            title: 'My "Watch-the-Box" Page',
            image: watchBox,
            alt:'homepage for Watch-the-Box',
            linkDeployed: 'https://nicholasconradholzer.github.io/boxManipulator/',
            // linkGithub:'',
            description:'A "Watch-the-Box" page; with buttons that use javascript to directly alter the CSS styling of a colored-box.',
            tech:''
        },
        {
            title: 'Instagram',
            image: runBuddy,
            alt:'homepage for "Run-Buddy, Inc."',
            linkDeployed: 'https://nicholasconradholzer.github.io/run-buddy/',
            // linkGithub:'',
            description:'The homepage and privacy policy page of Run-Buddy, Inc., featuring advanced applications of CSS for both user responsiveness and screensize-disparity formatting.',
            tech:''
        }]
    return(
        <div id="work-samples-nick" className="work-display chapterSize">
        <div id="samplesHolder">
            <h2 className="section-title">
               Social Media Links!
            </h2>
        </div>
            <div id="projectHolder">
                {projectArray.map((social, index)=>(
                    <ProjMod key={index} social = {social}></ProjMod>
                ))}
            </div>
           {instagram}
        </div>
    )
}