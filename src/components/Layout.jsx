import React from 'react'
import '../styles/main.scss'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div className="site__wrapper">
        <Nav />
        <main>{children}</main>
        <Footer />
    </div>
    
  )
}

export default Layout