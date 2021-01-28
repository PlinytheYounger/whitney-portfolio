import React from 'react';
import '../../css/skills.css';
import SkillElement from './Skill-Element';
import Button from 'react-bootstrap/Button';

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

    let idNameFront = 'hide';
    let idNameBack = 'hide';
    let idNameBusiness = 'hide';

    const toggleCard = (event) => {
        if(event.target.id === "front-end-button") {
            idNameFront = "show";
            idNameBack = "hide";
            idNameBusiness = "hide"; 
        } else if(event.target.id === "back-end-button") {
            idNameFront = "hide";
            idNameBack = "show";
            idNameBusiness = "hide";
        } else if(event.target.id === "business-end-button") {
            idNameFront = "hide";
            idNameBack = "hide";
            idNameBusiness = "show";
        }
    }

    /****************************
     * RETURN
     *****************************/

    return(
        <div className="skills-container" id="skills">
            <h1>Skills</h1>
            <div className="skills-education-resume">
                <div className="buttons">
                    <Button onClick={toggleCard} id="front-end-button" className="button">front-end</Button>
                    <Button onClick={toggleCard} id="back-end-button" className="button">back-end</Button>
                    <Button onClick={toggleCard} id="business-button" className="button">business</Button>
                </div>
                
                <div>
                    <div className="card" id={`${idNameFront}`}>
                        {techSkillsFront.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} /> 
                            )
                                            
                        })}
                    </div>
                    
                    
                    <div className="card" id={`${idNameBack}`} >
                        {techSkillsBack.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} />   
                            )
                        })}
                    </div>
                    
                    <div className="card" id={`${idNameBusiness}`}>
                        {otherSkills.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} /> 
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;