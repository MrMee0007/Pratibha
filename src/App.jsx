import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
       <Toaster position="top-right" />
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/team' element={<Team />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/services' element={<Services/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </div>
  )
}

export default App

