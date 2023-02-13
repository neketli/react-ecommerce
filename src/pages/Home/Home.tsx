import React from 'react'
import { Banner, FeaturedProducts } from '~/components'
import { Product } from '~/services/products'

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

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="container mx-auto mb-4">
        <FeaturedProducts
          title="Популярное"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, a repellendus quisquam sapiente ducimus quam minima quasi provident consequatur, enim eum maiores impedit numquam nam cupiditate dolorum ea? Provident, nisi?"
          productList={productList}
        />
        <section id="about"></section>
      </div>
    </div>
  )
}

export default Home
