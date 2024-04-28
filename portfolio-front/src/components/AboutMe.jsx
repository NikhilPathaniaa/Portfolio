import React from 'react'
import Content from '../about/Content'
import Photo from '../about/Photo'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='container'>
        <Photo/>
        <Content/>
        
    </div>
  )
}

export default AboutMe