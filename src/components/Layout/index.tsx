import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer, Cart } from '~/components'
import { Product } from '~/models/Product'
import { MAIN_MENU } from '~/services/tabs'
import { RootState, useStoreDispatch } from '~/store'
import { decrementCount, incrementCount, removeItem } from '~/store/cart'

const Layout = () => {
  const [isModalOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset'
  }, [isModalOpen])

  const cart = useSelector((state: RootState) => state.cart.cart)

  const dispatch = useStoreDispatch()

  const total = useMemo(() => {
    const total = {
      count: 0,
      price: 0,
    }
    cart.forEach((item) => {
      total.count += item.count
      total.price += item.price * item.count
    })
    return total
  }, [cart])

  const products = cart

  return (
    <div className="app h-full">
      <Navbar
        cartCount={total.count}
        toggleCartCallback={() => setIsOpen(!isModalOpen)}
        menuItems={MAIN_MENU}
      />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <Cart
        total={total.price}
        products={products}
        isModalOpen={isModalOpen}
        setIsOpenCallback={() => {
          setIsOpen(!isModalOpen)
        }}
        incrementItemCallback={(product: Product) => {
          dispatch(incrementCount(product))
        }}
        decrementItemCallback={(product: Product) => {
          dispatch(decrementCount(product))
        }}
        removeItemCallback={(product: Product) => {
          dispatch(removeItem(product))
        }}
      />
    </div>
  )
}

export default Layout
