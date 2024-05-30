import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Image from "../assets/avatar-icon.png"

function Header() {
  return (
    <header>
    <Link className="siteLogo" to="/">Sanctuary</Link>
    {/* <Link className="siteLogo" to="/">😺Sanctuary</Link> */}
    <nav>
      <NavLink 
        to="/dashboard"
        className={({isActive}) => isActive ? "activeLink" : null}
        >Dashboard</NavLink>
      <NavLink 
        to="/cats"
        className={({isActive}) => isActive ? "activeLink" : null}
        >Cats</NavLink>
      <NavLink 
        to="/about"
        className={({isActive}) => isActive ? "activeLink" : null}
        >About</NavLink>

        <Link to="login" className="loginLink">
          <img src={Image}
           className="loginIcon" />
        </Link>

    </nav>
    </header>
  )
}

export default Header