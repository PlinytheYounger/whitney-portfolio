import React from 'react';
import '../../css/projects.css';
import ProjectElement from './Project-Element';
import image2 from '../../images/photo2.jpeg';
import image3 from '../../images/escape_home.png';
import image4 from '../../images/tangiblematerials.png';
import image5 from '../../images/image5.png';
import image6 from '../../images/image6.png';

const Projects = () => {
    const projectArr = [
        {
            name: 'Ferney Common Ground',
            websiteURL: '',
            gitHubUrl: 'https://github.com/PlinytheYounger/ferney_common_ground',
            description: 'I was contracted to build this website from the ground up for a new business. It is currently in development stage, but hoping to launch in the next couple of weeks.',
            photoUrl: image6
        },
        {
            name: 'Revive Tailoring & Alterations',
            websiteURL: '',
            gitHubUrl: '',
            description: 'This is a project currently in development for a startup. I will be in charge of everything from designs to front-end and back-end development.',
            photoUrl: image5
        },
        {            
            name: 'Tangible Materials',
            websiteUrl: 'https://tangiblematerials.com',
            gitHubUrl: 'https://github.com/tangiblematerials/client',
            description: 'I was hired to create this landing page for a new startup in the sustainability industry. The website may look different to the photo depending on when you are viewing this.',
            // technology: 'React, HTML, CSS'
            photoUrl: image4
        },
        {
            name: 'Escape',
            websiteUrl: 'https://escape-travel-app.herokuapp.com/',
            gitHubUrl: 'https://github.com/PlinytheYounger/escape-app',
            description: 'All in one, easy to use travel trip planner. All of your lodging, receipts, tickets and information in one spot. Invite others from your group to join so you can easily split expenses and collaborate!',
            photoUrl: image3  
        },
        {
            name: 'Study Buddy',
            websiteUrl: '',
            gitHubUrl: 'https://github.com/PlinytheYounger/study_buddy_frontend',
            description: 'One stop shop to track your upcoming interviews, create a study plan and connect with others to schedule interview practice!',
            photoUrl: image2 
        },
    ]
    return(
        <div className="projects-main">
            <h2>Recent Projects</h2>
            <div className="projects-container">
                {projectArr.map((project, id) => {
                    return <ProjectElement project={project} id={id} key={`${project.name}${id}`}/>
                })}

            </div>
        </div>
    )
}

export default Projects;