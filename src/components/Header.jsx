import React from 'react'
import { Link, NavLink } from "react-router-dom"

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
    </nav>
    </header>
  )
}

export default Header