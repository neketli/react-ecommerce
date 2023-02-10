import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Layout } from '~/components'
import { Home } from '~/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
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
