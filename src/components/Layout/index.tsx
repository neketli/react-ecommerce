import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { MAIN_MENU } from '~/services/tabs'

import CartModal from '../CartModal'

const Layout = () => {
  const [isModalOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset'
  }, [isModalOpen])

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
      id: 4,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 5,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 6,
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
        cartCount={products.length}
        toggleCartCallback={() => setIsOpen(!isModalOpen)}
        menuItems={MAIN_MENU}
      />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <CartModal
        products={products}
        isModalOpen={isModalOpen}
        setIsOpenCallback={() => {
          setIsOpen(!isModalOpen)
        }}
      />
    </div>
  )
}

export default Layout
