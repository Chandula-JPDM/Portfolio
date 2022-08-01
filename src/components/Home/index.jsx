import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const index = () => {
  return (
    <div className='container home-page'>
        <h1>Hi, my name is</h1>
        <h2>Chandula J.P.D.M.</h2>
        <h3>I build things for the web.</h3>
        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatemnt.</p>
        
        <Link to='contact' className='flat-button'>Contact me</Link>
    </div>
  )
}

export default index