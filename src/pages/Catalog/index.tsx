import React, { useState } from 'react'
import { Search, Tabs } from '~/components'
import { ProductList } from '~/components'
import { Category } from '~/models/Category'

const Catalog = () => {
  const tabs: Category[] = [
    {
      title: 'asd1',
      value: 'asd1',
    },
  ]

  const [activeFilter, setActiveFilter] = useState({ title: '', value: '' })

  return (
    <div className="catalog">
      <div className="container mx-auto mb-4">
        <Search placeholder="Газовый котел..." className="mt-8" />
        <Tabs
          className="my-4"
          onChange={setActiveFilter}
          activeTab={activeFilter}
          tabs={tabs}
        />
        <ProductList list={productList} />
      </div>
    </div>
  )
}

export default Catalog
