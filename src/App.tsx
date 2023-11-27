import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '~/components'
import { Home, Catalog, Product, Error } from '~/pages'

import Modal from 'react-modal'
Modal.setAppElement('#root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
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
