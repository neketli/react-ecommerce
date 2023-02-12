import React from 'react'
import './styles.css'
import { FaFireAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MenuItem } from '~/services/tabs'

interface Props {
  menuItems: MenuItem[]
}

function Navbar({ menuItems }: Props) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <FaFireAlt className="text-base sm:text-2xl" />{' '}
          <span className="text-base sm:text-2xl">Элемент тепла</span>
        </Link>
      </div>
      <ul className="menu">
        {menuItems.map((item: MenuItem) => (
          <li className="item">
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="actions">
        <div className="search cursor-pointer">
          <FaSearch className="icon" />
        </div>
        <div className="cart cursor-pointer">
          <FaShoppingCart className="icon" />
          {true && <span className="indicator">2</span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
