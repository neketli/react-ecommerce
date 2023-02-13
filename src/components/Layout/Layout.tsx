import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { MAIN_MENU } from '~/services/tabs'

function Layout() {
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
