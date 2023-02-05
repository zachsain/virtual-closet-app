import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {BsFillHouseFill} from 'react-icons/bs'
import '../App.css'
import './NavBar.css'

function NavBar () {
 return (
    <div className="navbar-container">
      <div className='nav-btn'>
        <Link to="/"> My Closet </Link>
      </div>
      {/* <div className='nav-btn'>
        <Link to="/"><span><BsFillHouseFill /> My Closet</span></Link>
      </div> */}
      <div className="nav-btn">
        <Link  to="/styles">Styles</Link>
      </div>
      <div className="nav-btn">
        <Link to="/brands">Brands</Link>
      </div>
      <div className="nav-btn">
        <Link to="/logout">Logout</Link>
      </div>
    </div> 
    
 )
}

export default NavBar