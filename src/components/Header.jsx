import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header () {
  

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl font-bold">HEY</h1>


        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
