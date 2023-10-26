import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Player from '../components/player/player'

const Layout = (children) => {
  return (
    <>
    <Sidebar />
    {children}
    <Player />
    </>
  )
}

export default Layout;