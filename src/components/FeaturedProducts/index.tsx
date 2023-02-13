import React from 'react'
import { Product } from '~/services/products'
import { Card } from '~/components'

type Props = {
  sectionId?: string
  title?: string
  description?: string
  productList: Product[]
}

function FeturedProducts({
  sectionId,
  title,
  description,
  productList,
}: Props) {
  return (
    <section id={sectionId} className="feturedProducts py-8">
      <div className="flex items-center justify-between">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {description && (
          <p className="max-w-[66%] text-base text-gray-500">{description}</p>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-4 px-8">
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default FeturedProducts
