/*

  App.js is used to control all React Context Providers

*/

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Grommet } from 'grommet'

import { client } from './lib'
import theme from './theme'
import { Layout, HomePage } from './components'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grommet theme={theme} full>
        <ApolloProvider client={client}>
          <Layout>
            <Router>
              <Switch>
                <Route path="/page/:page">
                  <HomePage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </Layout>
        </ApolloProvider>
      </Grommet>
    </ThemeProvider>
  )
}

export default App
