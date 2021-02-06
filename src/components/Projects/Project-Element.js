import React from 'react';
import '../../css/projects.css';

const ProjectElement = (props) => {
    const { name, gitHubUrl, description, photoUrl } = props.project;

    return(
        <div className="project-container" id={`container${props.id}`}>
            <div className="project-card" id={`card${props.id}`}>
                <img src={photoUrl} alt={`${name} website`} />
            </div> 
            <div className="project-info" id={`info${props.id}`}>
                <h4>{name}</h4> {/* embed link to project */}
                <a href={gitHubUrl}><p>Code coming soon!</p></a>
                <p>{description}</p>                    
            </div>
        </div>
    )
}

export default ProjectElement;