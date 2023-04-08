import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-container'>
      <h1 className='error'>404</h1>
      <h2 className='error'>Not Found</h2>
     <Link to ='/' className='link'>Back to Home</Link>
    </div>
  )
}

export default ErrorPage