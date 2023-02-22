import axios from 'axios'

export const getProductsApi = async () => {
  return await axios.get(`${process.env.BASE_URL}/products`)
}
