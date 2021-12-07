import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {BiCodeAlt} from 'react-icons/bi';
import {TiMediaFastForward} from 'react-icons/ti';
import {RiFilePaper2Fill} from 'react-icons/ri';
import {FaGithub} from 'react-icons/fa';

const NavBarData = [
    {
        title: 'About',
        path: '/',
        icon: <AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <BiCodeAlt />,
        class: 'nav-text'
    },
    {
        title: 'Media',
        path: '/media',
        icon: <TiMediaFastForward />,
        class: 'nav-text'
    },
    {
        title: 'Resume',
        path: 'https://github.com/PlinytheYounger/whitney-portfolio',
        icon: <RiFilePaper2Fill />,
        class: 'nav-text'
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/whitneyleesmith/',
        icon: <AiFillLinkedin />,
        class: 'nav-text'
    },
    {
        title: 'GitHub',
        path: 'https://github.com/PlinytheYounger',
        icon: <FaGithub />,
        class: 'nav-text'
    }
]

export default NavBarData;