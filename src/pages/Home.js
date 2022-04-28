import React, { useState } from 'react'
import Employee from '../components/Employee'
import About from '../pages/About'

import { MainContext } from '../context'

function Home() {

  const [surname, setSurname] = useState("Azadeliyev");

  const [name, setName] = useState("Ferhad");


  const data = {
    surname,
    name
  }
  return (

    <MainContext.Provider value={data}>
      <Employee />
      <About />
    </MainContext.Provider>
  )
}

export default Home
