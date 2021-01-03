import React from 'react';
import '../../css/about.css';
import Photo from '../../images/photo.jpg';

const About = () => {

    return(
        <>
            <div className="about-container" id="about-container">

                <div className="social-photo">
                    <div className="bio">
                        <p>I am a creative, ambitious and organized software developer with an affinity for human-centered solutions. With a background in project & people management for a large-scale recruiting team, I am passionate about designing, building & shipping programs and tools that influence communities and people in a positive way.</p>
                    </div>
                    <div className="image">
                        <img src={Photo} alt="Whitney hiking in Vermont"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;