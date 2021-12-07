import React from 'react';
import '../../css/header.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import NavBarData from './NavBarData.js';

const NavBarContainer = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <div className="navigation-menu-container">
            <div className="hamburger-menu-container">
                <IconContext.Provider value={{color: "#1C2340"}}>
                <Link to="#" className="menu-bars">
                    <AiOutlineMenu onClick={showSidebar}/>
                </Link>
                </IconContext.Provider>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'> 
                        <Link to='#' className='menu-bars'>
                            <h2>X</h2>
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.class}>
                                <Link to={item.path} className="list-item-link">
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavBarContainer;