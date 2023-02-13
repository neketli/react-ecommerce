import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
import { Product } from '~/services/products'
import { CartCard } from '~/components'

type Props = {
  products: Product[]
  modalIsOpen: boolean
  setIsOpenCallback: () => void
}

const CartModal = ({ products, modalIsOpen, setIsOpenCallback }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={setIsOpenCallback}
      contentLabel="Корзина"
    >
      <div className="relative flex justify-between gap-6">
        <h2 className="text-2xl font-bold">Корзина</h2>
        <button className=" p-2" onClick={setIsOpenCallback}>
          <FaTimes className=" hover:filter" />
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
