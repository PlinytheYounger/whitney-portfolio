import React from 'react';
import '../../css/skills.css';

const SkillElement = (props) => {

    return(
        <div className="skills">
            <p>{props.name}</p>
        </div>
    )
}

export default SkillElement;