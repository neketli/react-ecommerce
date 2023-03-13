import axios from './axios'

export const getCategoriesApi = async () => {
  const response = await axios.get(`/api/categories`, {
    params: {
      populate: '*',
    },
  })

  return response
}
