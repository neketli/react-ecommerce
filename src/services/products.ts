import axios from './axios'
import { ServerCategoryData, ServerProductData } from '~/models/ServerResponse'
import { Product } from '~/models/Product'

export const formatProductsServerResponse = (
  data: ServerProductData[]
): Product[] => {
  return data.map((item: ServerProductData) => ({
    id: item.id,
    ...item?.attributes,
    image:
      import.meta.env.VITE_BASE_URL +
      item?.attributes.image.data.attributes.url,
    categories: item?.attributes.categories.data.map(
      (item: ServerCategoryData) => ({
        ...item?.attributes,
      })
    ),
  }))
}

export const getProductsApi = async ({
  searchQuery,
  categories,
}: {
  searchQuery?: string
  categories?: string[]
}) => {
  const filters: { [key: string]: string } = {}

  categories?.forEach(
    (item, idx) =>
      (filters[`filters[$and][${idx}][categories][url][$containsi]`] = item)
  )

  const response = await axios.get(`/api/products`, {
    params: {
      populate: '*',
      'filters[$or][0][title][$containsi]': searchQuery,
      'filters[$or][1][categories][name][$containsi]': searchQuery,
      ...filters,
    },
  })

  return response
}

export const getProductApi = async (url?: string) => {
  const { data } = await axios.get(`/api/products/${url}`, {
    params: { populate: '*' },
  })
  return data
}

export const getPopularProductsApi = async () => {
  const { data } = await axios.get(`/api/popular`, {
    params: { populate: 'deep' },
  })
  return formatProductsServerResponse(data.data.attributes.products.data)
}
