import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import { Product } from '~/services/products'
import { CartCard } from '~/components'
import './style.css'

type Props = {
  products: Product[]
  isModalOpen: boolean
  setIsOpenCallback: () => void
}

const CartModal = ({ products, isModalOpen, setIsOpenCallback }: Props) => {
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
          return <CartCard product={product} key={product.id} />
        })}
      </div>
    </Modal>
  )
}

export default CartModal
