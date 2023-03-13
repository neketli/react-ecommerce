import React from 'react'
import './style.css'
import { Product } from '~/models/Product'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '~/components'

type Props = {
  product: Product
  addToCartCallback: (product: Product) => void
}

const Card = ({ product, addToCartCallback }: Props) => {
  const onAddToCart = () => addToCartCallback(product)
  return (
    <div className="card">
      <div className="relative block h-48 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.title}
          className="image block h-64 w-48 overflow-hidden rounded-md object-cover object-center shadow-md"
        />
        {
          <Link to={`/product${product.url_path}`} className="description">
            {product.description || ''}
          </Link>
        }
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex gap-2">
          {product.categories &&
            product.categories.map((item) => {
              return (
                <a
                  key={item.name}
                  className="title-font mb-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium tracking-widest text-gray-500"
                >
                  {item.name}
                </a>
              )
            })}
        </div>
        <h4 className=" text-lg font-medium">{product.title}</h4>
        <div className="flex items-center justify-between">
          <p className="">{product.price} ₽</p>

          <Button onClick={onAddToCart}>
            <FaCartPlus className="fill-black" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
