import React from 'react'
import { Box, Heading, Text } from 'grommet'

import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const GET_ALL_ARTICLES = gql`
  query GetAllPosts {
    articles {
      url
      title
      id
      user {
        name
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
    data.articles.map(({ url, title }, index) => {
      return (
        <Box
          direction="column"
          margin="5px"
          background="light-2"
          key={`article-${title}-${index}`}
        >
          <Heading weight={200} level="3" margin="none">
            {title}
          </Heading>
          <Text>{url}</Text>
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
