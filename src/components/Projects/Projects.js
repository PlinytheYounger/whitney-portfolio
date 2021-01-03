import React from 'react';
import '../../css/projects.css';

const Projects = () => {
    return(
        <>
            <div className="title" id="projects">
                <h2>Projects</h2>
            </div>
            <div className="projects-container">
                <div className="project-container" id="project-one-container">
                    <h2>Study Buddy</h2> {/* embed link to project */}
                    <h3>Link to Code</h3>
                    <p>Description</p>
                </div>
                <div className="project-container" id="project-two-container">
                    <h2>Study Buddy</h2> {/* embed link to project */}
                    <h3>Link to Code</h3>
                    <p>Description</p>
                </div>
                <div className="project-container" id="project-three-container">
                    <h2>Study Buddy</h2> {/* embed link to project */}
                    <h3>Link to Code</h3>
                    <p>Description</p>
                </div>
                <div className="project-container" id="project-four-container">
                    <h2>Study Buddy</h2> {/* embed link to project */}
                    <h3>Link to Code</h3>
                    <p>Description</p>
                </div>
                <div className="project-container" id="project-five-container">
                    <h2>Study Buddy</h2> {/* embed link to project */}
                    <h3>Link to Code</h3>
                    <p>Description</p>
                </div>
            </div>
        </>
    )
}

export default Projects;