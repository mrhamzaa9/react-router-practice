import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/services'

const Layout = ({ children }) => {
    let routes = <>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Services />} />
    </>
    return (
        <>
            <Header />
            <Routes>
                {routes}
            </Routes>
            <Footer />
        </>
    )
}

export default Layout
