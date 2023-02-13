import React from 'react'
import { Product } from '~/services/products'
import { Card } from '~/components'

type Props = {
  title?: string
  description?: string
  productList: Product[]
}

function FeturedProducts({ title, description, productList }: Props) {
  return (
    <div className="feturedProducts py-8">
      <div className="flex items-center justify-between">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {description && (
          <p className="max-w-[66%] text-base text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-4 px-8">
        {productList.map((product) => <Card key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default FeturedProducts
