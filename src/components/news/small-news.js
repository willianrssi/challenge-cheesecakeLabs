'use strict'

import React from 'react'
import styled from 'styled-components'

import Author from 'components/author'
import { categoriesColor } from 'utils/categoriesColor'

const SmallNews = ({news, author}) => (
  <Container>
    <Category category={news.category} href='#'>{news.category}</Category>

    <Title href='#'>{news.title}</Title>

    <Author authorId={news.author} />

    <Content>{news.content}</Content>

  </Container>
)

const Container = styled.div`
  width: 360px;
`

const Category = styled.a`
  color:${props => categoriesColor[props.category]};
  font-family: Lato;
  font-size: 10px;
  line-height: 22.8px;
  text-decoration: none;
  text-transform: uppercase;
`

const Title = styled.a`
  color: #000000;
  display: block;
  font-family: Lato;
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 10px;
  text-decoration: none;
`

const Content = styled.p`
  color: #686868;
  font-family: OpenSans;
  font-size: 14px;
  line-height: 22.8px;
  margin: 20px 0 0 0;
  `

export default SmallNews
