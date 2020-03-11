import React from 'react'
import { Box, Heading, Text } from 'grommet'

import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const GET_ALL_ARTICLES = gql`
  query getPagePosts {
    articleFeed(limit: 15, offset: 20) {
      cursor
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
function HomeQuery() {
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES)

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
    </Box>
  )
}

HomeQuery.propTypes = {}

export default HomeQuery
