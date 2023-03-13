import axios from './axios'

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
  const { data } = await axios.get(`/api/populars`, {
    params: { populate: '*' },
  })
  return data
}
