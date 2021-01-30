import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import '../css/main.css';

const Container = () => {
    return (
        <div className="main">
            <Header />
            <About />
            <div id="bottom-border"></div>
            <Projects />
            <div id="bottom-border"></div>
            <Skills />
            <div id="bottom-border"></div> 
            <Contact />
            <div id="bottom-border"></div>
            <Footer />
        </div>
    )
}

export default Container;