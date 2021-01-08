import React from 'react';
import '../../css/projects.css';

const ProjectElement = (props) => {
    console.log(props)
    const { name, gitHubUrl, description, photoUrl } = props.project;

    return(
        <div className="project-container" id={`project-${props.id}-container`}>
            <h2>{name}</h2> {/* embed link to project */}
            <a href={gitHubUrl}>See My Code</a>
            <p>{description}</p>
            <img src={photoUrl} alt={`${name} website`} />
        </div>
    )
}

export default ProjectElement;