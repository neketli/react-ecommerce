import React from 'react'
import './styles.css'
import { FaFireAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {}

const menuItems = [
  {
    title: 'Каталог',
    link: '/catalog',
  },
  {
    title: 'О нас',
    link: '/about',
  },
  {
    title: 'Связь',
    link: '/links',
  },
]

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <FaFireAlt className="sm:text-2xl text-base" />{' '}
          <span className="sm:text-2xl text-base">Элемент тепла</span>
        </Link>
      </div>
      <ul className="menu">
        {menuItems.map((item) => {
          return (
            <li className="item">
              <Link to={item.link}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
      <div className="actions">
        <div className="search cursor-pointer">
          <FaSearch className="icon" />
        </div>
        <div className="cart cursor-pointer">
          <FaShoppingCart className="icon" />
          {true && <span className="indicator">0</span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
