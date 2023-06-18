import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
          <Link to="/">Home </Link> 
          <Link to="/login">Login </Link>
          <Link to="/register">Register </Link>
    </>
  )
}

export default NavBar
