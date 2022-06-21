import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
           <div className="n-left">
            <div className="n-name">
                Chandula
            </div>
           </div>
           <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Projects</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
           </div>
        </div>
    )
}

export default Navbar