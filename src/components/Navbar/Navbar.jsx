import React, { useState } from "react"
import { nav } from "../../data"
import "./navbar.css"
import NavbarItem from "../NavList/NavbarItem"
import logo from "../../assets/logotype.png"
import { IoCloseSharp } from "react-icons/io5"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleMenuClick = () => {
    setIsMobile(!isMobile)
    const mobileMenu = document.querySelector(".mobile-menu")
    if (mobileMenu) {
      mobileMenu.classList.toggle("active")
    }
  }

  const handleCloseClick = () => {
    setIsMobile(false)
  }

  return (
    <nav className='navbar'>
      {isMobile ? (
        <div className='mobile-menu'>
          <div className='hat'>
            <img src={logo} alt='logo' />
            <IoCloseSharp
              className='hat__icon'
              size={40}
              onClick={handleCloseClick}
            />
          </div>
          <ul className='navbar__list_modal'>
            {nav.map((item, idx) => {
              return <NavbarItem key={idx} item={item} />
            })}
            <a href='#' onClick={handleCloseClick}>
              Buy Now
            </a>
          </ul>
        </div>
      ) : (
        <>
          <ul className='navbar__list'>
            {nav.map((item, idx) => {
              return <NavbarItem key={idx} item={item} />
            })}
            <a href='#!'>Buy Now</a>
          </ul>
          <FiMenu className='menu-icon' size={30} onClick={handleMenuClick} />
        </>
      )}
    </nav>
  )
}

export default Navbar
