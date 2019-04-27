import React from 'react'
import '../App.css'
import palmtree from '../images/palmtree.png'
import miamiridez from '../images/miamiridez.png'

const Navbar = () => {
  return(
    <nav class="navbar navbar-dd">
    <div>
      <div class="navbar-header">
        <img class="logo"
             src={miamiridez}
        />

      </div>
    </div>
  </nav>
  )
}

export default Navbar
