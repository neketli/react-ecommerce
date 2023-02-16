import React from 'react'
import { ProductList } from '~/components'
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

  return <ProductList list={productList} />
}

export default Catalog