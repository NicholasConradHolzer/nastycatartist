import React from "react";

export default function ProjMod(props){
    let {social} = props

    return(
        <div className="project-panel">
        {/* <div className="project-card"> */}
            <a className="projectPortal" href={social.linkDeployed}>
            {/* <a className="pic" href={project.linkDeployed}> */}
            <h3>{social.title}</h3>
            <img src={social.image} alt={social.alt} />
            </a>
            <p>{social.description}</p>
            {/* <a href={project.linkGithub}>{project.title}</a> */}
        </div>
    )
}