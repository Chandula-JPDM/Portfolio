import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Profile from '../../assets/images/chandulaJPDM.jpg'

const About = () => {
  return (
    <div className='container about-page'>
        <div className="text-area">
            <h2>About me</h2>
            
            <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
            <p>Fast-forward to today, and I’ve had the privilege of working at Upstatement for a variety of clients.</p>
            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            
            <ul>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Eleventy</li>
                <li>Node.js</li>
                <li>WordPress</li>
            </ul>
            <Link to='/resume' className='flat-button'>Download Resume</Link>
        </div>
        <div className="image-area">
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default About