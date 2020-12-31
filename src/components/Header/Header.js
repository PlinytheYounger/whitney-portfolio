import React from 'react';
import '../../css/header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="nav">
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="/projects">Projects</a>
                </div>
                <div>
                    <a href="/contact">Contact</a>
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