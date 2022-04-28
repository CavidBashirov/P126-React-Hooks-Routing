import React from 'react'
import { MainContext, useContext } from '../context';

function About() {

  
  const { name } = useContext(MainContext)
  return (
    <div>
      <span>About page</span>
      <h4>{name}</h4>
    </div>
  )
}

export default About
