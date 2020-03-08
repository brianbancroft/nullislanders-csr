import React from 'react'
import { Main } from 'grommet'
import { HomeQuery, SiteHeader, SiteFooter } from '..'

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Main>
        <HomeQuery />
      </Main>
      <SiteFooter />
    </>
  )
}

export default Layout
