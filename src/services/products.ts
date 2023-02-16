export interface Product {
  id: string | number
  image: string
  title: string
  description?: string
  category?: string[]
  price: number
}
