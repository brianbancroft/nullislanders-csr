import React from 'react'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import { HomeQuery } from '..'
/**
 * Gathers query params and passes them to the relevant locations
 */
function HomePage() {
  const { page = 1 } = useParams()

  return <HomeQuery page={Number(page)} />
}

HomePage.propTypes = {}

HomePage.defaultProps = {}

export default HomePage
