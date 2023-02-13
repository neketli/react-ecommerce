import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { MAIN_MENU } from '~/services/tabs'

import CartModal from '../CartModal'

const Layout = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const products = [
    {
      id: 1,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description: 'lorem ipsum',
      price: 150,
    },
    {
      id: 2,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description: 'lorem ipsum',
      price: 250,
    },
    {
      id: 3,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 3,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 3,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 3,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
  ]

  return (
    <div className="app h-full">
      <Navbar
        toggleCartCallback={() => {
          setIsOpen(!modalIsOpen)
        }}
        menuItems={MAIN_MENU}
      />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <CartModal
        products={products}
        modalIsOpen={modalIsOpen}
        setIsOpenCallback={() => {
          setIsOpen(!modalIsOpen)
        }}
      />
    </div>
  )
}

export default Layout
