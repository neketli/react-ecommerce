import React from 'react'
import './styles.css'
import { FaFireAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MenuItem } from '~/services/tabs'

interface Props {
  menuItems: MenuItem[]
  cartCount: number
  toggleCartCallback: () => void
}

function Navbar({ menuItems, cartCount, toggleCartCallback }: Props) {
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
          <li key={item.title} className="item">
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="actions">
        <div className="search cursor-pointer">
          <FaSearch className="icon" />
        </div>
        <div onClick={toggleCartCallback} className="cart cursor-pointer">
          <FaShoppingCart className="icon" />
          {cartCount > 0 && <span className="indicator">{cartCount}</span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
