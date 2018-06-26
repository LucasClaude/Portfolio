import React from 'react';
import logo from '../assets/headshot.jpg';
import './Info.css';

import * as FontAwesome from 'react-icons/lib/fa';


const About = (props) => {

return (
    <div className="InfoPage">
        <div className="AboutPage">
            <div className='about'>
                <div className='left'>
                     <img src={logo} alt="Lucas Claude"/>
                         <div className='Inform'>
                            <h1 className='name'>LUCAS CLAUDE</h1>
                            <h2 className='degree'>Computer Science Degree</h2>
                            <p className='Bio'> I graduated with a Computer Science Major, and a
                                Business Administration Minor from Florida Southern College. Here I was also
                                a two-time captain on the Men's Lacrosse. I am currently seeking a position
                                in Central Florida as an entry-level developer.
                            </p>
                        </div>
                </div>
                <div className='right'>
                     <div className="other">
                        <ul>
                            <li><p onClick={props.SwitchTo.bind(this)} data-id="2">My Resume</p></li>
                            <li><p onClick={props.SwitchTo.bind(this)} data-id="3">My Portfolio</p></li>
                            <li><p onClick={props.SwitchTo.bind(this)} data-id="4">Contact Me</p></li>
                        </ul>
                    </div>
                </div>
                <div className="links">
                    <ul>
                        <li className="bottomLinks">
                            <p className="icon"><FontAwesome.FaEnvelope size={40} /></p>
                                <div className="rightLink">
                                    <a href="mailto:lucasclaude17@gmail.com">lucasclaude17@gmail.com</a>
                                    <p>Email Address</p>
                                </div>
                        </li>
                        <li className="bottomLinks">
                            <p className="icon"><FontAwesome.FaLinkedin size={40} /></p>
                            <div className="rightLink">
                                <a href="https://linkedin.com/in/lucasclaude" target="_blank" 
                                 rel="noopener noreferrer"> LucasClaude</a>
                                <p>LinkedIn</p>
                            </div>
                        </li>
                        <li className="bottomLinks">
                            <p className="icon"><FontAwesome.FaGithub size={40} /></p>
                            <div className="rightLink">
                                <a href="https://github.com/LucasClaude" target="_blank" rel="noopener noreferrer">LucasClaude</a>
                                <p>Github</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default About;
