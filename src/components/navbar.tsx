import React, { useState } from 'react'
import './styles/navbar.scss'
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

const NavBar = () => {
  let startingToggle = window.innerWidth < 1199 ? 'collapse' : 'keep'

  const [offset, setOffset] = useState(-74)

  return (
    <nav className="nav">
      <Link smooth={true} to="root" className="nav-logo" href="#">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-items">
        <Link smooth={true} to="about-me" className="nav-item" offset={offset} href="#">
          about me
        </Link>
        <Link smooth={true} to="education" className="nav-item" offset={offset} href="#">
          education
        </Link>
        <a href="#" className="nav-item">
          item3
        </a>
        <a href="#" className="nav-item">
          item4
        </a>
        <a href="#" className="nav-item">
          item5
        </a>
      </div>
    </nav>
  )
}

export default NavBar
