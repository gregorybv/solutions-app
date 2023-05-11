import React from "react"
import "./modalnav.css"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

const ModalNav = ({ item }) => {
  return (
    <div>
      <div className='modal'>
        <a href='#!' className='modal__link'>
          {item.name}
          <IoIosArrowDown size={15} />
        </a>

        <ul className='modal__list'>
          {item.list.map((listItem) => (
            <li className='modal__item' key={listItem}>
              <p className='modal__text'>{listItem}</p>
              <IoIosArrowForward size={10} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ModalNav
