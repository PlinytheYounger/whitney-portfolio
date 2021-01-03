import React from 'react';
import '../../css/skills.css';
import Rating from 'react-rating';

const Skills = () => {
    const techSkillsFront = ['JavaScript', 'React', 'CSS', 'Sass', 'HTML', 'Ruby', 'Python'];
    const techSkillsBack = ['Node.js', 'Express.js', 'Rails', 'SQL', 'Django'];
    const otherSkills = ['Agile', 'Scrum', 'Asana', 'Excel', 'Tableau', 'Project Management'];

    return(
        <div className="resume" id="skills">
            <h2>Skills</h2>
            <div className="skills-education-resume">
                <div id="technical-skills">
                    <ul>
                        {techSkillsFront.map((skill, id) => {
                            return (
                                <>
                                    <li key={id} >{skill}</li>
                                    <Rating 
                                        initialRating={3}
                                        readonly
                                    />    
                                </>
                            )
                                            
                        })}
                    </ul>
                    <ul>
                        {techSkillsBack.map((skill, id) => {
                            return (
                                <div>
                                    <li key={id} >{skill}</li>
                                    <Rating 
                                        initialRating={2.5}
                                        readonly
                                    />    
                                </div>
                            )
                        })}
                    </ul>
                </div>

                <div id="other-skills">
                    <ul>
                        {otherSkills.map((skill, id) => {
                            return (
                                <div>
                                    <li key={id} >{skill}</li>
                                    <Rating 
                                        initialRating={2.5}
                                        readonly
                                    />  
                                </div>
                            )
                        })}
                    </ul>
                </div>
                            
            </div>
        </div>
    )
}

export default Skills;