import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './containers/Header'
import Calendario from './pages/Calendario'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Posiciones from './pages/Posiciones'

function App() {



  return (
    <>
      <Header/>

      <Routes>

        < Route path='/' element={   < Home /> } />
        < Route path='/posiciones' element={   < Posiciones /> } />
        < Route path='/calendario' element={   < Calendario /> } />
        < Route path='/contacto' element={   < Contacto /> } />

      </Routes>

    </>
  )
}

export default App
