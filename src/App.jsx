import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Inicio from './Inicio/inicio'
import Dashboard from './Dashboard/dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Inicio />}/>
        <Route path='/dashboard' element= {<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
