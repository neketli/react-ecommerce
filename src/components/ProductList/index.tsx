import React from 'react'
import { Product } from '~/models/Product'
import { Card } from '~/components'
import { addToCart } from '~/store/cart'
import { useStoreDispatch } from '~/store'

type Props = {
  list: Product[]
}

const ProductList = ({ list }: Props) => {
  const dispatch = useStoreDispatch()
  const addToCartCallback = (product: Product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4 px-8">
      {list.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCartCallback={addToCartCallback}
        />
      ))}
    </div>
  )
}

export default ProductList
