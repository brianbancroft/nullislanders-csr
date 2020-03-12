import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'

const SingleElement = ({ i, currentPage }) => (
  <Box
    border={{
      size: 'small',
      color: i === currentPage ? 'brand' : 'accent-1',
    }}
    pad="small"
  >
    <Text> {i}</Text>
  </Box>
)

/**
 * Provides classic pagination bar
 */
function PaginationDisplay({ limit, offset, numberItems }) {
  if (limit < 1) {
    console.error('Error in PaginationDisplay: Limit must be greater than zero')
    return <></>
  }
  const elements = []
  const bandSize = 5
  const currentPage = Math.round(offset / limit)
  const numberPages = Math.round(numberItems / limit)

  const lowerBound = currentPage < bandSize ? 1 : currentPage - bandSize

  const upperBound =
    numberPages - currentPage < bandSize ? numberPages : currentPage + bandSize

  if (lowerBound !== 1)
    elements.push(<SingleElement i={1} currentPage={currentPage} />)

  for (let i = lowerBound; i < upperBound; i++) {
    elements.push(<SingleElement i={i} currentPage={currentPage} />)
  }

  if (upperBound !== numberPages)
    elements.push(<SingleElement i={numberPages} currentPage={currentPage} />)

  return (
    <Box direction="row" justify="around">
      {elements}
    </Box>
  )
}

PaginationDisplay.propTypes = {
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  numberItems: PropTypes.number.isRequired,
}

export default PaginationDisplay
