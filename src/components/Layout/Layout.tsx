import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer } from '~/components'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="app h-full">
      <Navbar />
      <div className="content container mx-auto mb-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
