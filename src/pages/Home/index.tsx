import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { About, Banner, FeaturedProducts, Contacts } from '~/components'
import { Product } from '~/models/Product'
import { useStoreDispatch, RootState } from '~/store'
import { getProducts } from '~/store/products'

function Home() {
  const dispatch = useStoreDispatch()
  const products: Product[] = useSelector(
    (state: RootState) => state.products.list
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

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
