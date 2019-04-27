import React from 'react'
import '../App.css'
import palmtree from '../images/palmtree.png'

const Navbar = () => {
  return(
    <nav class="navbar navbar-dd bg-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
        <img
            src={palmtree}
            alt='atl'
            className='palmtree'
        />
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
