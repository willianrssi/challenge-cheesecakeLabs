'use strict'

import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'

import Header from 'components/header'
import News from 'components/news'
import {fetchNews} from 'reducers/news/action-creators'

import Lato from 'fonts/Lato-Regular.ttf'
import OpenSans from 'fonts/OpenSans-Regular.ttf'
import 'normalize.css'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchNews()
  }
  render () {
    return (
      <Container>
        <Header />
        <Main>
          <News />
        </Main>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: () => dispatch(fetchNews())
})

injectGlobal`
@font-face {
  font-family: 'Lato';
  src: url(${Lato});
}

@font-face {
  font-family: 'OpenSans';
  src: url(${OpenSans});
}

`
const Container = styled.div`

`

const Main = styled.main`
display: flex;
justify-content: center;
min-width: max-content;
padding: 76px 0 0;
`

export default connect(null, mapDispatchToProps)(App)
