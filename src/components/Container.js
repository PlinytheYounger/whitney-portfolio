import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Projects from './Projects/Projects';
import Media from './Media/Media';
import { Route, Switch } from 'react-router-dom';
import '../css/main.css';

const Container = () => {
    return (
        <div className="main">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/media">
                        <Media />
                    </Route>
                    <Route path="/">
                        <About />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default Container;