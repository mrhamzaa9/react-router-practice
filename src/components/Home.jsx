import React from 'react'

const Home = () => {
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My React App 
      </h1>

      <p className="text-gray-700 text-lg mb-8 max-w-xl">
        This is the Home page — built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.  
        Navigate using the links in the navbar above.
      </p>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
    <hr />
    </>
  )
}

export default Home
