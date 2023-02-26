export interface DefaultServerResponse {
  id: number
  attributes: DefaultAttributes
}

export interface DefaultAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface CategoriesServerResponse {
  data: ServerCategoryData[]
  meta: { pagination: Pagination }
}

export interface ProductsServerResponse {
  data: ServerProductData[]
  meta: { pagination: Pagination }
}

export interface ServerProductData extends DefaultServerResponse {
  attributes: DefaultAttributes & {
    title: string
    description: string
    price: number
    categories: {
      data: ServerCategoryData[]
    }
    image: {
      data: ServerImageData
    }
  }
}

export interface ServerCategoryData extends DefaultServerResponse {
  attributes: DefaultAttributes & {
    name: string
    url: string
  }
}

interface ServerImageData extends DefaultServerResponse {
  attributes: DefaultAttributes & {
    name: string
    alternativeText: string
    url: string
  }
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
