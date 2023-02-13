import React from 'react'
import { FaRubleSign } from 'react-icons/fa'
import { Product } from '~/services/products'

type Props = {
  product: Product
}

const CartCard = ({ product }: Props) => {
  return (
    <a
      className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
      href=""
    >
      <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
        {product.price} <FaRubleSign />
      </span>

      <div className="mt-4 text-gray-500 sm:pr-8">
        <img className="h-8 w-8 sm:h-10 sm:w-10" src={product.image}></img>

        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {product.title}
        </h3>

        {product.description && (
          <p className="mt-2 hidden text-sm sm:block">{product.description}</p>
        )}
      </div>
    </a>
  )
}

export default CartCard
