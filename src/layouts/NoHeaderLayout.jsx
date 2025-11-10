import React from 'react'
import Footer from '../components/footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

const NoHeaderLayout = () => {
    let noShowHeaderRoutes = <>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*'
            element={
                <Navigate to={"/about"} />
            } />
    </>
    return (
        <div>
            <Routes>
                {noShowHeaderRoutes}
            </Routes>
            <Footer />
        </div>
    )
}

export default NoHeaderLayout
