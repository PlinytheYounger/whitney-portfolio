import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import '../css/main.css';

const Container = () => {
    return (
        <div className="main">
            <Header />
            <div className="content">
            <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>

            </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default Container;