import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/services.jsx'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Services />} />
      </Route>
    </Routes>
  )
}

export default App

