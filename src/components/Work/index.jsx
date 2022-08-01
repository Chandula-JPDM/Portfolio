import React from 'react'
import './index.scss'
import Card from './Card'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='container work-page'>
        <h2>Some things I build</h2>
        <Link to='/archive' target='_blank' className='link'><h3>View the Archive</h3></Link>
        <div className="projects">
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
            <Card title="Integrating Algolia Search with WordPress Multisite" description="Building a custom multisite compatible WordPress plugin to build global search with Algolia"/>
        </div>
    </div>
  )
}

export default index