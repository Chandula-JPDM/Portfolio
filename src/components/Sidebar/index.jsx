import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-c.png'
import LogoSub from '../../assets/images/logo_sub_c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSub} alt="sub-logo" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#8892b0' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#8892b0' />
            </NavLink>
            {/* <NavLink exact='true' activeclassname='active' className='project-link' to='/work'>
                <FontAwesomeIcon icon={faPenToSquare} color='#8892b0'/>
            </NavLink> */}
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#8892b0' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://github.com/Chandula-JPDM" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/chandulajpdm/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/chandula12d/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/ChandulaJpdm" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} color='#8892b0'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar