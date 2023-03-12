import axios from './axios'

export const getProductsApi = async (params: { products?: string }) => {
  const response = await axios.get(`/api/products`, {
    params: {
      populate: '*',
    },
  })

  return response
}
