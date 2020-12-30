import React from 'react';
import '../../css/main.css';

const About = () => {
    const techSkillsFront = ['JavaScript', 'React', 'CSS', 'Sass', 'HTML', 'Ruby', 'Python'];
    const techSkillsBack = ['Node.js', 'Express.js', 'Rails', 'SQL', 'Django'];
    const otherSkills = ['Agile', 'Scrum', 'Asana', 'Excel', 'Tableau', 'Project Management'];

    return(
        <>
            <div className="title">
                <h2>Software Developer</h2>
            </div>
            <div className="about-container">

                    <div className="resume">
                        <div className="bio">
                            <p>I am a creative, ambitious and organized software developer with an affinity for human-centered solutions. With a background in project & people management for a large-scale recruiting team, I am passionate about designing, building & shipping programs and tools that influence communities and people in a positive way.</p>
                        </div>
                        <div className="skills-education-resume">
                            <div id="technical-skills">
                                <h3>Technical Skills</h3>
                                <ul>
                                    {techSkillsFront.map((skill, id) => {
                                        return <li key={id} >{skill}</li>
                                    })}
                                </ul>
                                <ul>
                                    {techSkillsBack.map((skill, id) => {
                                        return <li key={id} >{skill}</li>
                                    })}
                                </ul>
                            </div>

                            <div id="technical-skills">
                                <h3>Other Skills</h3>
                                <ul>
                                    {otherSkills.map((skill, id) => {
                                        return <li key={id} >{skill}</li>
                                    })}
                                </ul>
                            </div>
                            
                        </div>

                        <div className="experience-education-resume">

                        </div>
                    </div>

                <div className="social-photo">
                    <p>Photo will go here</p>
                </div>
            </div>
        </>
    )
}

export default About;