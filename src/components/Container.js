import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';

const Container = () => {
    return (
        <>
            <Header />
            <div className="main">
                {/* TODO: BrowserRouter */}
                <About />
                <Projects />
                <Resume />
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Container;