import React from 'react'
import Sidebar from '../containers/sidebar/sidebar';
import Player from '../containers/player/player';


const Layout = ({children}) => {
  return (
    <>
    <Sidebar />
    {children}
    <Player />
    </>
  )
}

export default Layout;