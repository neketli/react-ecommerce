import React from 'react'
import { Banner, FeaturedProducts } from '~/components'
import { Product } from '~/services/products'

type Props = {}

const productList: Product[] = [
  {
    id: 1,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description: 'lorem ipsum',
    price: 150,
  },
  {
    id: 2,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description: 'lorem ipsum',
    price: 250,
  },
  {
    id: 3,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description:
      'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
    price: 150,
  },
  {
    id: 3,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description:
      'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
    price: 150,
  },
  {
    id: 3,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description:
      'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
    price: 150,
  },
  {
    id: 3,
    image: '/src/img/Buterus.png',
    title: 'Boiler',
    description:
      'Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a',
    price: 150,
  },
]

const Home = (props: Props) => {
  return (
    <div className="home">
      <Banner />
      <div className="container mx-auto mb-4">
        <FeaturedProducts
          title="Популярное"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, a repellendus quisquam sapiente ducimus quam minima quasi provident consequatur, enim eum maiores impedit numquam nam cupiditate dolorum ea? Provident, nisi?"
          productList={productList}
        />
      </div>
    </div>
  )
}

export default Home