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
            <NavLink exact='true' activeclassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#8892b0' />
            </NavLink>
            <NavLink exact='true' activeclassName='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#8892b0' />
            </NavLink>
            <NavLink exact='true' activeclassName='active' className='project-link' to='/work'>
                <FontAwesomeIcon icon={faPenToSquare} color='#8892b0'/>
            </NavLink>
            <NavLink exact='true' activeclassName='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#8892b0' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faGithub} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faLinkedinIn} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faInstagram} color='#8892b0'/>
                </a>
            </li>
            <li>
                <a href="" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faTwitter} color='#8892b0'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar