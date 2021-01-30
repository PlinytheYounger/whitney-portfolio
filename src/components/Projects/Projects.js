import React from 'react';
import '../../css/projects.css';
import ProjectElement from './Project-Element';
import Accordion from 'react-bootstrap/Accordion';
import image1 from '../../images/photo1.jpeg';
import image2 from '../../images/photo2.jpeg';
import image3 from '../../images/photo3.jpeg';


const Projects = () => {
    const projectArr = [
        {
            name: 'Lobbyists & Bills',
            gitHubUrl: '',
            description: 'Have you ever wanted to see exactly what your constituent brings to the floor once they are elected? Data trends for bills.',
            photoUrl: image1 
        },
        {
            name: 'Study Buddy',
            gitHubUrl: '',
            description: 'One stop shop to track your upcoming interviews, create a study plan and connect with others to schedule interview practice!',
            photoUrl: image2 
        },
        {
            name: 'Travel Ease',
            gitHubUrl: '',
            description: 'All in one, easy to use travel trip planner. All of your lodging, receipts, tickets and information in one spot. Invite others from your group to join so you can easily split expenses and collaborate!',
            photoUrl: image3  
        },
    ]
    return(
        <div className="projects-main">
            <div className="title" id="projects">
                <h1>Projects</h1>
            </div>
            <Accordion className="projects-container">
                {projectArr.map((project, id) => {
                    return <ProjectElement project={project} id={id} key={`${project.name}${id}`}/>
                })}

            </Accordion>
        </div>
    )
}

export default Projects;