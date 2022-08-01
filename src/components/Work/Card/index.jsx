import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const index = (props) => {
  return (
    <div className='card'>
      <header>
          <div className='icon-box'>
            <FontAwesomeIcon icon={faFolder} className='icon'/>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='external-link'/>
          </div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </header>
      <footer>{props.tech}</footer>
    </div>
  )
}

export default index