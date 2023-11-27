import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import CartCard from './Card'
import { CartProduct } from '~/store/cart'
import './style.css'
import { Product } from '~/models/Product'

type Props = {
  total: number
  products: CartProduct[]
  isModalOpen: boolean
  setIsOpenCallback: () => void
  incrementItemCallback: (product: Product) => void
  decrementItemCallback: (product: Product) => void
  removeItemCallback: (product: Product) => void
}

const Cart = ({
  total,
  products,
  incrementItemCallback,
  decrementItemCallback,
  removeItemCallback,
  isModalOpen,
  setIsOpenCallback,
}: Props) => {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isModalOpen}
      onRequestClose={setIsOpenCallback}
    >
      <div className="relative flex justify-between gap-6">
        <h2 className="text-2xl font-bold">Корзина</h2>
        <button className=" p-2" onClick={setIsOpenCallback}>
          <FaTimes className="transition-all hover:fill-blue-500" />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {products.map((product) => {
          return (
            <CartCard
              product={product}
              incrementItemCallback={incrementItemCallback}
              decrementItemCallback={decrementItemCallback}
              removeItemCallback={removeItemCallback}
              key={product.id}
            />
          )
        })}
      </div>
      <div className="mt-8 flex text-xl">
        Итого: <span className="ml-2 font-bold"> {total} ₽</span>
      </div>
    </Modal>
  )
}

export default Cart
