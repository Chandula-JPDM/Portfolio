import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const index = () => {
  return (
    <div className='container home-page'>
        <h1>Hi, my name is</h1>
        <h2>Chandula J.P.D.M.</h2>
        <h3>I am a Computer Engineer.</h3>
        <p>I'm an Undergraduate at Department of Computer Engineering, University of Peradeniya. Currently, I’m working on a research about Configurable ECU Emulator for Creating Digital Twins in the Car Manufacturing Industry.</p>
        
        <Link to='contact' className='flat-button'>Contact me</Link>
    </div>
  )
}

export default index