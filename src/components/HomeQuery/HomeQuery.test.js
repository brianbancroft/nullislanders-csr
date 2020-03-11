import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {
  render,
  cleanup,
  findByTestId,
  findByText,
} from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { internet, lorem } from 'faker'

import HomeQuery, { GET_ALL_ARTICLES } from './HomeQuery'

const staticTitle = lorem.sentence()
const staticUrl = internet.url()

const mocks = [
  {
    request: {
      query: GET_ALL_ARTICLES,
    },
    result: {
      data: {
        articles: [
          {
            title: staticTitle,
            url: staticUrl,
            id: 1,
            user: {
              name: internet.userName(),
            },
          },
        ],
      },
    },
  },
]

describe('HomeQuery component', () => {
  describe('when the data is loading', () => {
    it('should render the loading state', async () => {
      const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <HomeQuery />
        </MockedProvider>,
      )

      const loadingElement = await findByText(container, 'Loading')

      expect(loadingElement).toBeTruthy()
    })
  })

  describe('when the data has loaded', () => {
    it('should display the url', async () => {
      const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <HomeQuery />
        </MockedProvider>,
      )

      const urlElement = await findByText(container, staticUrl)

      expect(urlElement).toBeTruthy()
    })

    it('displays no more than 50 results', () => {})
    it('displays entirely different results for a second page of pagination', () => {})
  })

  describe('when the data cannot load due to error', () => {
    it('should display the error state ', async () => {
      const { container } = render(
        <MockedProvider
          mocks={[{ ...mocks[0], error: new Error('Arrowed!') }]}
          addTypename={false}
        >
          <HomeQuery />
        </MockedProvider>,
      )
      const errorElement = await findByText(container, 'error')

      expect(errorElement).toBeTruthy()
    })
  })
})
