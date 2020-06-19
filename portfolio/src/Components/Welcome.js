import React, { Component } from 'react';
import '../CSS/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="WelcomeDiv">
                <div className="bg"></div>

                <div className="Welcome_Text">
                    <div className="Red_Label"></div>
                    <p className="Text" id="hey">Hey There!</p>
                    <p className="Text" id="welcome">I’m <p className="name">Tomasz Nawrocki</p></p>
                    <p className="Text" id="city">Based In Katowice</p>
                </div>

                <div className="Skills">
                    <div className="Label"></div>
                    <div className="Label2"></div>
                </div>

                
                <p className="labelText" id="wd">Web Designer</p>
                <p className="labelText" id="wb">Web Developer</p>
                <p className="labelText" id="ui">UI/UX Designer</p>
                <div className="Labelchild1"></div>
                <div className="Labelchild2"></div>
                <div className="Portfolio"></div>
                <p className="PortfolioText">MY PORTFOLIO</p>
            </div>
        );
    }
}

export default Welcome;
