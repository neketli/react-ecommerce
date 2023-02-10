import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '~/pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
