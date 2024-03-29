import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Pagination, Search } from '~/components/UI'
import { ProductList, Categories } from '~/components'
import { RootState, useStoreDispatch } from '~/store'
import { getProducts } from '~/store/products'
import { getCategories } from '~/store/categories'
import { Product } from '~/models/Product'
import { Category } from '~/models/Category'
import { debounce } from 'lodash'
import './style.css'

const Catalog = () => {
  const dispatch = useStoreDispatch()
  const products: Product[] = useSelector(
    (state: RootState) => state.products.list
  )
  const pagination = useSelector(
    (state: RootState) => state.products.pagination
  )
  const tabs: Category[] = useSelector(
    (state: RootState) => state.categories.list
  )

  const [activeFilters, setActiveFilters] = useState([{ name: '', url: '' }])
  const [searchQuery, setSearchQuery] = useState('')

  const setCategory = (curr: Category) => {
    setActiveFilters((prev) =>
      prev.includes(curr)
        ? prev.filter((item) => item.url !== curr.url)
        : [...prev, curr]
    )
  }

  const [pageIndex, setPageIndex] = useState(pagination.page)

  const setSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }, 350)

  useEffect(() => {
    if (!tabs.length) {
      dispatch(getCategories())
    }

    dispatch(
      getProducts({
        searchQuery,
        categories: activeFilters.map((item) => item.url),
        page: pageIndex,
      })
    )
  }, [searchQuery, activeFilters, pageIndex, dispatch])

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
        <div className="flex flex-col gap-4">
          <ProductList list={products} />
          {pagination.pageCount > 1 && (
            <Pagination
              gotoPage={setPageIndex}
              canPreviousPage={pageIndex > 1}
              canNextPage={pageIndex < pagination.pageCount}
              pageCount={pagination.pageCount}
              pageIndex={pageIndex}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Catalog
