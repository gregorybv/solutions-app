import React, { useEffect, useRef, useState } from "react"
import logo from "../../assets/logotype.png"
import { AiOutlineSearch } from "react-icons/ai"
import "./header.css"
import Navbar from "../Navbar/Navbar"

const Header = ({ setSearchQuery }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isHeaderSticky = currentScrollPos > headerHeight + 200

      setIsSticky(isHeaderSticky)

      if (currentScrollPos > prevScrollPos) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }

      setPrevScrollPos(currentScrollPos)
    }

    const handleResize = () => {
      setHeaderHeight(headerRef.current.clientHeight)
    }

    setHeaderHeight(headerRef.current.clientHeight)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [prevScrollPos, headerHeight])

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`} ref={headerRef}>
      <div className='header__content'>
        <div className='header__container container'>
          <div className='header__hat'>
            <img src={logo} alt='Header Logo' />
            <div className='header__search'>
              <input
                className='header__input'
                type='text'
                placeholder='Поиск'
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AiOutlineSearch size={30} />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
