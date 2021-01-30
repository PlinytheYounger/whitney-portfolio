import React from 'react';
import '../../css/skills.css';
import SkillElement from './Skill-Element';
import {useState} from 'react';

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

    const [getState, setState] = useState({
        idNameFront: 'hide',
        idNameBack: 'hide',
        idNameBusiness: 'hide'
    })

    const toggleCard = (event) => {
        // add functionality to setState to 'hide' if the user clicks the button again (i.e. clicks when state is set to 'show' for that div)
        if(event.target.id === "front-end-button") {
            if(getState.idNameFront === 'hide'){
                setState({
                idNameFront: 'show',
                idNameBack: 'hide',
                idNameBusiness: 'hide',
            })
        } else {
            setState({
                idNameFront: 'hide',
                idNameBack: 'hide',
                idNameBusiness: 'hide',
            })
        } 
        } else if(event.target.id === "back-end-button") {
            if(getState.idNameBack === 'hide'){
                setState({
                idNameFront: 'hide',
                idNameBack: 'show',
                idNameBusiness: 'hide'
            }) 
        } else {
            setState({
                idNameFront: 'hide',
                idNameBack: 'hide',
                idNameBusiness: 'hide'
            })
        }
        } else if(event.target.id === "business-button") {
            if(getState.idNameBusiness === 'hide') {setState({
                idNameFront: 'hide',
                idNameBack: 'hide',
                idNameBusiness: 'show',
                
            }) 
            } else {
                setState({
                    idNameFront: 'hide',
                    idNameBack: 'hide',
                    idNameBusiness: 'hide',
                })
            }
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
                    <div>
                    <button onClick={toggleCard} id="front-end-button" className="button">front-end</button>
                    <div className="card" id={`${getState.idNameFront}`}>
                        {techSkillsFront.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} /> 
                            )
                                            
                        })}
                    </div>
                    </div>
                    <button onClick={toggleCard} id="back-end-button" className="button">back-end</button>
                    <button onClick={toggleCard} id="business-button" className="button">business</button>
                </div>
                
                <div>
                    
                    
                    <div className="card" id={`${getState.idNameBack}`} >
                        {techSkillsBack.map((skill, id) => {
                            return (
                                <SkillElement key={id} name={skill.name} skillLevel={skill.skillLevel} />   
                            )
                        })}
                    </div>
                    
                    <div className="card" id={`${getState.idNameBusiness}`}>
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