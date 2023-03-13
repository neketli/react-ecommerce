import { Category } from './Category'

export interface Product {
  id: string | number
  image: string
  title: string
  description?: string
  categories?: Category[]
  price: number
  url_path: string
}
