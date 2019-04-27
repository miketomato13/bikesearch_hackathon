import React from 'react'
import '../App.css'
import miamiridez from '../images/miamiridez.png'

const Navbar = () => {
  return(
    <nav className="navbar">
    <div>
      <div className="navbar-header">
        <img className="logo"
             src={miamiridez}
        />
      </div>
    </div>
  </nav>
  )
}

export default Navbar
