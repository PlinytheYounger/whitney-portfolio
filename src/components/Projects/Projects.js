import React from 'react';
import '../../css/projects.css';
import ProjectElement from './Project-Element';

const Projects = () => {
    const projectArr = [
        {
            name: 'Lobbyists & Bills',
            gitHubUrl: '',
            description: '',
            photoUrl: '' 
        },
        {
            name: 'Study Buddy',
            gitHubUrl: '',
            description: '',
            photoUrl: '' 
        },
        {
            name: 'Travel Ease',
            gitHubUrl: '',
            description: '',
            photoUrl: '' 
        },
    ]
    return(
        <>
            <div className="title" id="projects">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                {projectArr.map((project, id) => {
                    return <ProjectElement project={project} id={id} key={`${project.name}${id}`}/>
                })}
                <div id="vertical-line"></div>
            </div>
        </>
    )
}

export default Projects;