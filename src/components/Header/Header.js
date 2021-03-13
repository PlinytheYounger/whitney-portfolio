import React from 'react';
import '../../css/header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <div className="name">
                <h1>Whitney Smith</h1>
            </div>
            <div className="nav">
                <div>
                    <Link to="/">About</Link>
                </div>
                <div>
                    <Link to="/projects">Projects</Link>
                </div>
                    {/* <div>
                        <Link to="/media">Media</Link>
                    </div> */}
                </div>
        </div>
    )
}

export default Header;