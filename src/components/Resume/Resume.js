import React from 'react';
import resume from '../../images/Whitney_Smith_Resume_3.14.22.png';
import '../../css/resume.css'

const Resume = () => {
    return (
        <div class="resume-container">
            <img src={resume} alt="Whitney Smith's resume - experience, education & relevant information"/>
        </div>
    )
}

export default Resume;