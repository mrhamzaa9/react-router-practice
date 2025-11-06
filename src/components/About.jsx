import React from 'react'
import Header from './header'

function About() {
  return (
    <>

       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        About Us 🧭
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl mb-6">
        We’re passionate about building modern and responsive web apps using 
        <span className="font-semibold"> React </span> and 
        <span className="font-semibold"> Tailwind CSS</span>.  
        Our mission is to make learning and development simpler for everyone.
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h2>
        <p className="text-gray-600">
          To empower developers to build beautiful, fast, and accessible apps with clean UI and powerful tools.
        </p>
      </div>
    </div>
    </>
  )
}

export default About
