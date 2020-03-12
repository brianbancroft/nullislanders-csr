import React from 'react'
import { Box, Text } from 'grommet'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import { PaginationDisplay } from '..'

const LIMIT = 12

export const GET_ALL_ARTICLES = gql`
  query getPagePosts($limit: Int!, $offset: Int!) {
    articleFeed(limit: $limit, offset: $offset) {
      cursor
      numberArticles
      articles {
        url
        title
        id
      }
    }
  }
`

/**
 * Queries all of the posts and displays them
 */
function HomeQuery({ page }) {
  const limit = LIMIT
  const offset = limit * (page - 1)

  const { loading, error, data } = useQuery(GET_ALL_ARTICLES, {
    variables: { limit, offset },
  })

  if (loading) return <h2>Loading</h2>
  if (error || !data) return <h2>error</h2>

  const Posts = () =>
    data.articleFeed.articles.map(({ url, title }, index) => {
      return (
        <Box
          direction="column"
          margin="xsmall"
          pad="xsmall"
          background="light-2"
          border={{ color: 'brand', size: 'medium' }}
          key={`article-${title}-${index}`}
        >
          <Box>
            <Text weight={200} size="18px" level="3">
              {title}
            </Text>
          </Box>
          <Box>
            <Text size="12px">{url}</Text>
          </Box>
        </Box>
      )
    })

  return (
    <Box direction="column" fill>
      <Posts />
      <PaginationDisplay
        limit={limit}
        offset={offset}
        numberItems={data.articleFeed.numberArticles}
        page={page}
      />
    </Box>
  )
}

HomeQuery.propTypes = {
  page: PropTypes.number.isRequired,
}

export default HomeQuery
