import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { Link } from 'react-router-dom'

const SingleElement = ({ i, page }) => (
  <Link to={`/page/${i}`}>
    <Box
      border={{
        size: 'small',
        color: i === page ? 'brand' : 'accent-1',
      }}
      pad="small"
    >
      <Text> {i}</Text>
    </Box>
  </Link>
)

/**
 * Provides classic pagination bar
 */
function PaginationDisplay({ limit, offset, numberItems, page }) {
  if (limit < 1) {
    console.error('Error in PaginationDisplay: Limit must be greater than zero')
    return <></>
  }
  const elements = []
  const bandSize = 5
  const numberPages = Math.round(numberItems / limit)

  const lowerBound = page - bandSize < 1 ? 1 : page - bandSize

  const upperBound =
    numberPages - page < bandSize ? numberPages : page + bandSize

  if (lowerBound !== 1)
    elements.push(<SingleElement i={1} key={`single-element-1`} page={page} />)

  for (let i = lowerBound; i < upperBound; i++) {
    elements.push(
      <SingleElement i={i} page={page} key={`single-element-${i}`} />,
    )
  }

  if (upperBound !== numberPages)
    elements.push(
      <SingleElement
        i={numberPages}
        page={page}
        key={`single-element-${numberPages}`}
      />,
    )

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
