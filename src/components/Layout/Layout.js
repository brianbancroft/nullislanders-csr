import React from 'react'
import PropTypes from 'prop-types'
import { Main } from 'grommet'

import { SiteHeader, SiteFooter } from '..'

const Layout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
