import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '~/components/UI'
import { ProductList, Categories } from '~/components'
import { RootState, useStoreDispatch } from '~/store'
import { getProducts } from '~/store/products'
import { getCategories } from '~/store/categories'
import { Product } from '~/models/Product'
import { Category } from '~/models/Category'

const Catalog = () => {
  const dispatch = useStoreDispatch()
  const products: Product[] = useSelector(
    (state: RootState) => state.products.list
  )
  const tabs: Category[] = useSelector(
    (state: RootState) => state.categories.list
  )
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  const [activeFilter, setActiveFilter] = useState({ name: '', url: '' })

  return (
    <div className="catalog">
      <div className="container mx-auto mb-4">
        <Search placeholder="Газовый котел..." className="mt-8" />
        <Categories
          className="my-4"
          onChange={setActiveFilter}
          activeTab={activeFilter}
          tabs={tabs}
        />
        <ProductList list={products} />
      </div>
    </div>
  )
}

export default Catalog
