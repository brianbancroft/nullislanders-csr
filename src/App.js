/*

  App.js is used to control all React Context Providers

*/

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'

import { Grommet } from 'grommet'

import { Layout } from './components'
import { client } from './lib'
import theme from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grommet theme={theme} full>
        <ApolloProvider client={client}>
          <Layout />
        </ApolloProvider>
      </Grommet>
    </ThemeProvider>
  )
}

export default App
