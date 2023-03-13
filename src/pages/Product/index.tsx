import React, { useEffect, useState } from 'react'
import { Product } from '~/models/Product'
import { getProductApi } from '~/services/products'
import { useParams } from 'react-router-dom'
import { Button } from '~/components'
import { FaCartPlus } from 'react-icons/fa'
import { ServerCategoryData } from '~/models/ServerResponse'
import Markdown from 'markdown-to-jsx'
import { useStoreDispatch } from '~/store'
import { addToCart } from '~/store/cart'

const ProductPage = () => {
  const initialProduct: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    url_path: '',
  }
  const { id } = useParams()
  const [product, setProduct] = useState<Product>(initialProduct)
  useEffect(() => {
    getProductApi(id?.split('-')[0]).then(({ data }) => {
      const { attributes: product } = data
      setProduct({
        id,
        ...product,
        image:
          import.meta.env.VITE_BASE_URL + product?.image.data.attributes.url,
        categories: product?.categories.data.map(
          (item: ServerCategoryData) => ({
            ...item?.attributes,
          })
        ),
      })
    })
  }, [])

  const dispatch = useStoreDispatch()
  const onAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product">
      <div className="container mx-auto mt-16 flex gap-8">
        <div className="w-1/2 rounded">
          <img
            src={product?.image}
            alt={product?.title}
            className="image block overflow-hidden rounded-md object-cover object-center shadow-md"
          />
        </div>

        <div className="mt-4 flex w-1/2 flex-col gap-2">
          <h2 className="text-2xl font-bold">{product?.title}</h2>
          <div className="flex gap-2">
            {product?.categories &&
              product?.categories.map((item) => {
                return (
                  <a
                    key={item.name}
                    className="title-font mb-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium tracking-widest text-gray-500"
                  >
                    {item.name}
                  </a>
                )
              })}
          </div>
          <div className="flex items-center gap-8">
            <p className="">{product?.price} ₽</p>

            <Button onClick={onAddToCart}>
              <FaCartPlus className="fill-black" />
            </Button>
          </div>
          {product?.description && (
            <div className="mt-2">
              <h3 className="font-medium">Описание:</h3>
              <Markdown>{product.description}</Markdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
