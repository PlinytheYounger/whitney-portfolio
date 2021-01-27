// require react
import React from 'react';
// require css
import '../../css/skills.css';

// create functional component
const SkillLevel = (props) => {
    // let skillLevel = props.skillLevel;

    // const makeDivs = () => {
    //     let skillArray = [];
    //     for(let i = 0; i < skillLevel; i++) {
    //         skillArray.push(i);
    //     }
    //     return skillArray;
    // }

    // let skillsArray = makeDivs();

    // return div with # of circles corresponding to rating #
    return(
        <div className="skill-level-container">
            {/* {skillsArray.map((num) => {
                return(
                    <div className="skill-level-div" key={`${num}`}></div>
                )
            })
            } */}
        </div>
    )
}


// export
export default SkillLevel;