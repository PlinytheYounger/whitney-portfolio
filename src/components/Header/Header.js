import React from 'react';
import Navigation from './Navigation';
// import '../../../public/css/header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <Navigation navHeading="About" />
                <Navigation navHeading="Projects" />
                <Navigation navHeading="Resume" />
                <Navigation navHeading="Contact" />
            </nav>
        </header>
    )
}

export default Header;