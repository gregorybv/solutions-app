import React from "react"
import "./navbaritem.css"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

const NavbarItem = ({ item }) => {
  return (
    <div>
      <div className='navbaritem'>
        <a href='#!' className='navbaritem__link'>
          {item.name}
          <IoIosArrowDown size={15} />
        </a>

        <ul className='navbaritem__list'>
          {item.list.map((listItem) => (
            <li className='navbaritem__item' key={listItem}>
              <p className='navbaritem__text'>{listItem}</p>
              <IoIosArrowForward size={10} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavbarItem
