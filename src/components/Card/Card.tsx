import React from 'react'
import './style.css'
import { Product } from '~/services/products'

type Props = {
  product: Product
}

const Card = ({ product }: Props) => {
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
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default Card
