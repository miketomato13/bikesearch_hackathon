import React from 'react'
import '../App.css'
import palmtree from '../images/palmtree.png'

const Navbar = () => {
  return(
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
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
