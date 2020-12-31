import React from 'react';
import '../../css/skills.css';

const Skills = () => {
    const techSkillsFront = ['JavaScript', 'React', 'CSS', 'Sass', 'HTML', 'Ruby', 'Python'];
    const techSkillsBack = ['Node.js', 'Express.js', 'Rails', 'SQL', 'Django'];
    const otherSkills = ['Agile', 'Scrum', 'Asana', 'Excel', 'Tableau', 'Project Management'];

    return(
        <div className="resume">
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

                            <div id="other-skills">
                                <h3>Other Skills</h3>
                                <ul>
                                    {otherSkills.map((skill, id) => {
                                        return <li key={id} >{skill}</li>
                                    })}
                        </ul>
                </div>
                            
            </div>
        </div>
    )
}

export default Skills;