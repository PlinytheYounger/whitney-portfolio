import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import '../css/main.css';

const Container = () => {
    return (
        <>
            <Header />
            <div className="main">
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
            </Switch>
            </div>
            <Footer />
        </>
    )
}

export default Container;