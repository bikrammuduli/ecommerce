import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

export const HomePage = () => (
  <div className='home-page'>
    <h1>Welcome to Home Page</h1>
    <Directory />
  </div>
)
