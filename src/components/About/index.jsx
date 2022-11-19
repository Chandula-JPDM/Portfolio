import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Profile from '../../assets/images/chandulaJPDM.jpg'
import Resume from '../../assets/chandula_cv.pdf'

const About = () => {
  return (
    <div className='container about-page'>
        <div className="text-area">
            <h2>About me</h2>
            
            <p>Hello! My name is Madushan Chandula and I am a final year undergraduate at Department of Computer Engineering, University of Peradeniya. 
              I am interested in Web development, Cloud computing, Cyber security and Network designing. I am very good at self learning and also I love to work in team enviroments.</p>
            <p>I had a privillage of doing my intership at NCSU Univeristy of Peradeniya where I learn a lot about Web development, Network managment and many other things.</p>
            <p>Fast forward to today I am currently working on a project with FORD motor company to build an ECU emulator for the Digital Twins in the car manufacturing industry.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Laravel</li>
                <li>Node.js</li>
                <li>Azure</li>
                <li>CSS</li>
                <li>C++</li>
                <li>Computer Architecture</li>
            </ul>
            <Link to={Resume} className='flat-button' rel="noreferrer" target="_blank" download>Download Resume</Link>
        </div>
        <div className="image-area">
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default About