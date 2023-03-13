import React from 'react'
import { Product } from '~/models/Product'
import { Card } from '~/components'
import { addToCart } from '~/store/cart'
import { useStoreDispatch } from '~/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

type Props = {
  list: Product[]
  isSlider?: boolean
}

const ProductList = ({ list, isSlider = false }: Props) => {
  const dispatch = useStoreDispatch()
  const addToCartCallback = (product: Product) => {
    dispatch(addToCart(product))
  }

  return (
    <>
      {!isSlider && (
        <div className="flex flex-wrap justify-center gap-8 py-4 px-8">
          {list.map((product) => (
            <Card
              key={product.id}
              product={product}
              addToCartCallback={addToCartCallback}
            />
          ))}
        </div>
      )}
      {isSlider && (
        <Swiper
          className="product-list flex justify-center"
          modules={[Pagination]}
          spaceBetween={50}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
        >
          {list.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                key={product.id}
                product={product}
                addToCartCallback={addToCartCallback}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}

export default ProductList
