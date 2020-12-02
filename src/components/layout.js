import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalNav from "./global-nav-bar"
import GlobalFooter from "./global-footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
      <GlobalFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
