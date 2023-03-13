import React from 'react'
import { FaFireAlt, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { MenuItem } from '~/models/MenuItem'
import './styles.css'

interface Props {
  menuItems: MenuItem[]
  cartCount: number
  toggleCartCallback: () => void
}

function Navbar({ menuItems, cartCount, toggleCartCallback }: Props) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <FaFireAlt className="text-base sm:text-2xl" />{' '}
          <span className="text-base sm:text-2xl">Элемент тепла</span>
        </Link>
      </div>
      <ul className="menu">
        {menuItems.map((item: MenuItem) => (
          <li key={item.title} className="item">
            <HashLink to={item.link}>{item.title}</HashLink>
          </li>
        ))}
      </ul>
      <div className="actions">
        <div onClick={toggleCartCallback} className="cart cursor-pointer">
          <FaShoppingCart className="icon" />
          {cartCount > 0 && <span className="indicator">{cartCount}</span>}
        </div>
      </div>
    </header>
  )
}

export default Navbar
