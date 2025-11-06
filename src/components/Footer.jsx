import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

      
        <h2 className="text-xl font-semibold text-white">
          <span className="text-blue-500">HEY.</span>
        </h2>

    
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        
        </div>

  
        <p className="text-sm text-gray-500">
          ©  HEY. All rights reserved.
        </p>
      </div>
    </footer>


    </>
  )
}

export default Footer
