import React, { useState } from 'react'
import { Search, Tabs } from '~/components'
import { ProductList } from '~/components'
import { Tab } from '~/components/UI/Tabs'
import { Product } from '~/services/products'

const Catalog = () => {
  const productList: Product[] = [
    {
      id: 1,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description: 'lorem ipsum',
      price: 150,
    },
    {
      id: 2,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description: 'lorem ipsum',
      price: 250,
    },
    {
      id: 3,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 4,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 5,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
    {
      id: 6,
      image: '/src/assets/img/Buterus.png',
      title: 'Boiler',
      description:
        'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
      price: 150,
    },
  ]

  const tabs = [
    {
      title: 'asd1',
    },
    {
      title: 'asd2',
    },
  ]

  const [activeFilter, setActiveFilter] = useState({})

  const onChange = (tab: Tab) => {
    console.log(activeFilter, tab)
    setActiveFilter(tab)
  }

  return (
    <div className="catalog">
      <div className="container mx-auto mb-4">
        <Search placeholder="Газовый котел..." className="mt-8" />
        <Tabs
          className="my-4"
          onChange={onChange}
          activeTab={activeFilter}
          tabs={tabs}
        />
        <ProductList list={productList} />
      </div>
    </div>
  )
}

export default Catalog
