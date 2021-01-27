// require react
import React from 'react';
// require css
import '../../css/skills.css';
// import SkillLevel
import SkillLevel from './Skill-Level';

// create functional component
const SkillElement = (props) => {
// return <div> with <li> and <SkillLevel rating={props.rating} /> 

    return(
        <div className="skills-container">
            <div>
                <p>{props.name}</p>
            </div>
            <div>
                <SkillLevel skillLevel={props.skillLevel} key={`Skill: ${props.name}`} />
            </div>
        </div>
    )
}


// export
export default SkillElement;