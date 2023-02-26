import axios from './axios'

export const getProductsApi = async () => {
  const response = await axios.get(`/api/products`, {
    params: {
      populate: '*',
    },
  })

  return response
}
