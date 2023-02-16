import React from 'react'
import './style.css'
import { Product } from '~/services/products'
import { FaRubleSign } from 'react-icons/fa'

type Props = {
  product: Product
}

function Card({ product }: Props) {
  return (
    <div className="card">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-48 overflow-hidden rounded-md object-cover shadow-md"
        />
        {product.description && (
          <div className="description">{product.description}</div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h4 className=" text-lg font-medium">{product.title}</h4>
        <div className="flex">
          <p className="">{product.price}</p>₽
        </div>
      </div>
    </div>
  )
}

export default Card
