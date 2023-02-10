import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { MAIN_MENU } from '~/services/tabs'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="app h-full">
      <Navbar menuItems={MAIN_MENU} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
