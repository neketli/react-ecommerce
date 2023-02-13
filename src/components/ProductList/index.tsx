import React from 'react'
import { Product } from '~/services/products'
import { Card } from '~/components'

type Props = {
  list: Product[]
}

const ProductList = ({ list }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4 px-8">
      {list.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
