import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Paróquia Perto
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Início
        </Link>
        <Link to="/paroquias" className="text-gray-700 hover:text-blue-600">
          Paróquias
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
