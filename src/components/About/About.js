import React from 'react';
import '../../css/about.css';
import Photo from '../../images/photo.jpg';
import {Link} from 'react-router-dom';

const About = () => {

    return(
        <>
            <div className="about-container">

                <div className="about">
                    <div className="image">
                        <img src={Photo} alt="Whitney hiking in Vermont"></img>
                    </div>
                    <div className="about-middle-divider"></div>
                    <div className="blurb">
                        <h2>Hi there!</h2>
                        <h4>I'm Whitney Smith and I'm looking for opportunities to build products that change the world.</h4>
                        <p>Ever since I was a kid I had an innate knack and interest in patterns and solving problems. Over the last few years, this has manifested in a quest for learning as much as possible about computer science and software engineering - fields in which the tenacity to find the best solutions and coming up with new ideas, is celebrated.</p>
                        <p>Currently I'm open to connecting on opportunities to turn my interest into a career. Please check out <Link to="/projects" id="link_projects"><i>here</i></Link> for my most recent projects.</p>
                        <a href="mailto:whitney.smith.lee@gmail.com?"><h2>Get in touch with me.</h2></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;