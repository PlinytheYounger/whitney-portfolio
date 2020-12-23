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
                    <a href="/resume">Resume</a>
                </div>
                <div>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div className="name">
                <h2>Whitney Smith</h2>
            </div>
        </div>
    )
}

export default Header;