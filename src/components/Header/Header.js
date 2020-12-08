import React from 'react';
import '../../css/header.css';

const Header = () => {
    return(
        <header>
            <nav>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;