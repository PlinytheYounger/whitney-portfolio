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
            <Skills />
            <Projects /> 
            <Contact />
            <Footer />
        </div>
    )
}

export default Container;