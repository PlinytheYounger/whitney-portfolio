import React from 'react';
import '../../css/projects.css';

const ProjectElement = (props) => {
    const { name, gitHubUrl, description, photoUrl, websiteUrl } = props.project;

    return(
        <div className="project-container" id={`container${props.id}`}>
            <div className="project-info" id={`info${props.id}`}>
                <a href={websiteUrl}>
                    <h4>{name}</h4>
                </a>
                    <a href={gitHubUrl}>
                        <p><b>{gitHubUrl ? "Source Code Here" : "Code coming soon!"}</b></p>
                    </a>
                    <p>{description}</p>         
            </div>
            <div className="project-card" id={`card${props.id}`}>
                <img src={photoUrl} alt={`${name} website`} />
            </div> 
        </div>
    )
}

export default ProjectElement;