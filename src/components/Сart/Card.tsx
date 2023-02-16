import React from 'react'
import { FaRubleSign, FaTrash } from 'react-icons/fa'
import { Product } from '~/services/products'
import './style.css'

type Props = {
  product: Product
  deleteCallback: () => void
}

const CartCard = ({ product, deleteCallback }: Props) => {
  return (
    <div className="cart-card relative block rounded-xl border border-gray-100 p-8 shadow-md">
      <div className="absolute right-4 top-4 flex gap-1">
        <span className="flex gap-1 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-600">
          {product.price} ₽
        </span>
        <button
          onClick={deleteCallback}
          className="flex gap-1 rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold transition-all hover:bg-red-200 hover:shadow-md"
        >
          <FaTrash className="fill-red-600 transition-all hover:fill-red-800" />
        </button>
      </div>

      <div className="mt-4 flex gap-4 text-gray-500">
        <div className="min-w-16 w-16">
          <img
            className="min-w-16 h-24 w-16 overflow-hidden rounded-sm object-cover"
            src={product.image}
          />
        </div>

        <div className="flex max-w-[60%] flex-col">
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            {product.title}
          </h3>

          {product.description && (
            <p className="description">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartCard
