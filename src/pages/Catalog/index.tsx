import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '~/components/UI'
import { ProductList, Categories } from '~/components'
import { RootState, useStoreDispatch } from '~/store'
import { getProducts } from '~/store/products'
import { getCategories } from '~/store/categories'
import { Product } from '~/models/Product'
import { Category } from '~/models/Category'
import { debounce } from 'lodash'

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

  const [activeFilters, setActiveFilters] = useState([{ name: '', url: '' }])
  const [searchQuery, setSearchQuery] = useState('')

  const setCategory = (curr: Category) => {
    setActiveFilters((prev) =>
      prev.includes(curr)
        ? prev.filter((item) => item.url !== curr.url)
        : [...prev, curr]
    )
  }

  const setSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }, 350)

  useEffect(() => {
    dispatch(
      getProducts({
        searchQuery,
        categories: activeFilters.map((item) => item.url),
      })
    )
  }, [searchQuery, activeFilters, dispatch])

  return (
    <div className="catalog">
      <div className="container mx-auto mb-4">
        <Search
          placeholder="Газовый котел..."
          className="mt-8"
          onInput={setSearch}
        />
        <Categories
          className="my-4"
          onChange={setCategory}
          activeFilters={activeFilters}
          tabs={tabs}
        />
        <ProductList list={products} />
      </div>
    </div>
  )
}

export default Catalog
