import React from 'react';
import '../../css/projects.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const ProjectElement = (props) => {
    const { name, gitHubUrl, description, photoUrl } = props.project;

    let updatedId = props.id;
    let newId = updatedId + 1;


    return(
        <Card className="project-container">
            <Accordion.Toggle as={Card.Header} eventKey={newId} className="accordion-toggle">
                {name}
            </Accordion.Toggle> {/* embed link to project */}
            <Accordion.Collapse eventKey={newId} className="accordion-collapse">
                <div>
                    <img src={photoUrl} alt={`${name} website`} />
                    <a href={gitHubUrl}>See My Code</a>
                    <p>{description}</p>                    
                </div>
            </Accordion.Collapse>
        </Card>
    )
}

export default ProjectElement;