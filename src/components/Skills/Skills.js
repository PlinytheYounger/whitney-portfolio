import React from 'react';
import '../../css/skills.css';
import SkillElement from './Skill-Element';

const Skills = () => {

    const techSkillsFront = [
        {
            name: 'JavaScript',
            skillLevel: 3
        }, 
        {
            name: 'React', 
            skillLevel: 3
        },
        {
            name: 'CSS', 
            skillLevel: 3
        },
        {
            name: 'Sass', 
            skillLevel: 2
        },
        {
            name: 'HTML', 
            skillLevel: 5
        },
        {
            name: 'Ruby', 
            skillLevel: 2
        },
        {
            name: 'Python',
            skillLevel: 3
        }
    ]

    const techSkillsBack = [
        {
            name: 'Node.js', 
            skillLevel: 3
        },
        {
            name: 'Express.js', 
            skillLevel: 4
        },
        {
            name: 'Rails', 
            skillLevel: 3
        },
        {
            name: 'SQL', 
            skillLevel: 3
        },
        {
            name: 'Django',
            skillLevel: 2
        },

    ];

    const otherSkills = [
        {
            name: 'Agile', 
            skillLevel: 4
        },
        {
            name: 'Scrum', 
            skillLevel: 3
        },
        {
            name: 'Asana', 
            skillLevel: 4
        },
        {
            name: 'Excel', 
            skillLevel: 5
        },
        {
            name: 'Tableau', 
            skillLevel: 3
        },
        {
            name: `PM`,
            skillLevel: 5
        }
    ];


    /****************************
     * RETURN
     *****************************/

    return(
        <div className="resume" id="skills">
            <h1>Skills</h1>
            <div className="skills-education-resume">
                <div id="front-end-skills">
                        {techSkillsFront.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} /> 
                            )
                                            
                        })}
                </div>

                <div id="back-end-skills">
                        {techSkillsBack.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} />   
                            )
                        })}
                </div>

                <div id="other-skills">
                        {otherSkills.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} /> 
                            )
                        })}
                </div>
                            
            </div>
            <div id="bottom-border-skills"></div>
        </div>
    )
}

export default Skills;