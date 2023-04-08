import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <nav>
        <Link to ='/'>Home</Link>
        <Link to='/order'>Review Order</Link>
        <Link to = '/about'>About Us</Link>
        <Link to = '/contact'>Contact us</Link>
        <Link to = '/notfound'>Not Found</Link>
      </nav>
    </div>
  )
}

export default Header