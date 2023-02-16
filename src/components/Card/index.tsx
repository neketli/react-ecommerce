import React from 'react'
import './style.css'
import { Product } from '~/services/products'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
  product: Product
}

function Card({ product }: Props) {
  return (
    <div className="card">
      <div className="relative block h-48 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.title}
          className="image block h-64 w-48 overflow-hidden rounded-md object-cover object-center shadow-md"
        />
        {product.description && (
          <Link to={`product/${product.id}`} className="description">
            {product.description}
          </Link>
        )}
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex gap-2">
          {product.category &&
            product.category.map((item) => {
              return (
                <a
                  key={item}
                  className="title-font mb-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium tracking-widest text-gray-500"
                >
                  {item}
                </a>
              )
            })}
        </div>
        <h4 className=" text-lg font-medium">{product.title}</h4>
        <div className="flex items-center justify-between">
          <p className="">{product.price} ₽</p>
          <a className="inline-block flex-1 cursor-pointer rounded-lg bg-yellow-400 px-4 py-2 text-center text-sm font-semibold outline-none ring-yellow-300 transition duration-100 hover:bg-yellow-500 focus-visible:ring active:bg-yellow-600 sm:flex-none md:text-base">
            <FaCartPlus className="fill-black" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
