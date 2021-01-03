import React from 'react';
import '../../css/header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return(
        <div className="header">
            <div className="nav">
                <div>
                    <HashLink smooth to="/about#about-container">About</HashLink>
                </div>
                <div>
                    <HashLink smooth to="/skills#skills">Skills</HashLink>
                </div>
                <div>
                    <HashLink smooth to="/projects#projects">Projects</HashLink>
                </div>
                <div>
                    <HashLink smooth to="/contact#contact">Contact</HashLink>
                </div>
            </div>
            <div className="name">
                <h1>Whitney Smith</h1>
                <h2>Software Developer</h2>
            </div>
            <div className="social-icons">
                    <p>Github</p>
                    <p>LinkedIn</p>
            </div>
        </div>
    )
}

export default Header;