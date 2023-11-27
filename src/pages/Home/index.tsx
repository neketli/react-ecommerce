import React, { useEffect, useState } from 'react'
import { About, Banner, FeaturedProducts, Contacts } from '~/components'
import { Product } from '~/models/Product'
import { getPopularProductsApi } from '~/services/products'

function Home() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getPopularProductsApi().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className="home">
      <Banner />
      <div className="container mx-auto mb-4">
        <FeaturedProducts
          title="Популярное"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, a repellendus quisquam sapiente ducimus quam minima quasi provident consequatur, enim eum maiores impedit numquam nam cupiditate dolorum ea? Provident, nisi?"
          productList={products}
        />
        <section id="about">
          <About />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </div>
  )
}

export default Home
