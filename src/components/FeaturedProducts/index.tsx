import React from 'react'
import { Product } from '~/models/Product'
import { ProductList } from '~/components'

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
    <section id={sectionId} className="featured-products  py-8 px-2">
      <div className="mb-4 flex items-center justify-between">
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {description && (
          <p className="max-w-[66%] text-base text-gray-500">{description}</p>
        )}
      </div>
      <ProductList isSlider list={productList} />
    </section>
  )
}

export default FeturedProducts
