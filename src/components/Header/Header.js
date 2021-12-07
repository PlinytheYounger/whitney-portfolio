import React from 'react';
import '../../css/header.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import NavBarContainer from './NavBarContainer.js';


const Header = () => {

    return(
        <div className="header-outside-container">
            <header position="static">
                <div className="title-name">
                    <h1>Whitney Smith</h1>
                </div>
                <NavBarContainer />
            </header>
        </div>
    )
}

export default Header;