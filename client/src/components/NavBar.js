import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../App.css'
import './NavBar.css'

function NavBar ({user, setUser}) {
 return (
    <div className="navbar-container">
      <div className='nav-btn'>
      <Link to="/">Profile</Link>
      </div>
      <div className="nav-btn">
      <Link  to="/something">Something Else</Link>
      </div>
      <div className="nav-btn">
      <Link to="/posts">Posts</Link>
      </div>
      <div className="nav-btn">
      <Link to="/logout">Logout</Link>
      </div>
    </div> 
    
 )
}

export default NavBar