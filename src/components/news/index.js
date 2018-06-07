'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import BigNews from './big-news'
import MediumNews from './medium-news'
import SmallNews from './small-news'

const News = ({news}) => (
  <Container>
    <MainNews>
      {Object.keys(news)
            .filter((item) => news[item].size === 'big')
            .map((item) =>
              <BigNews
                key={news[item].id}
                news={news[item]}
                />)}

      {Object.keys(news)
            .filter((item) => news[item].size === 'medium')
            .map((item) =>
              <MediumNews
                key={news[item].id}
                news={news[item]}
              />)}

    </MainNews>

    <OtherNews>

      {Object.keys(news)
            .filter((item) => news[item].size === 'small')
            .map((item) =>
              <SmallNews
                key={news[item].id}
                news={news[item]}
               />)}

    </OtherNews>

  </Container>
    )

const mapStateToProps = (state) => ({
  news: state.news
})

const Container = styled.div`
  width: 1400px;
  min-width: max-content;
`

const MainNews = styled.section`
  border-bottom: 1px solid #E3E3E3
  display:flex;
  justify-content: space-between;
  margin: 0 131px ;
  padding: 0 0 25px 0;
  `

const OtherNews = styled.section`
display:flex;
justify-content: space-between;
padding: 30px 0 0 0;
margin: 0 131px;
`

export default connect(mapStateToProps)(News)
