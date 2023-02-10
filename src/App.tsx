import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Layout } from '~/components'
import { Home, Catalog, Product } from '~/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog/', element: <Catalog /> },
      { path: '/product/:id', element: <Product /> },
    ],
  },
])

function App(): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
