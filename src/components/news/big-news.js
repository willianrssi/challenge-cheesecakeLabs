'use strict'

import React from 'react'
import styled from 'styled-components'

import Author from 'components/author'
import ReadMore from './read-more'
import { categoriesColor } from 'utils/categoriesColor'

const BigNews = ({news, authorId}) => (
  <Container>
    <Category category={news.category} href='#'>{news.category}</Category>
    <NewsImage href='#' >
      <StyledReadMore />
      <Image src={news.urlImage} />
    </NewsImage>
    <Title href='#'>{news.title}</Title>

    <Author big authorId={news.author} />
  </Container>
)

const Container = styled.div`
  width: 555px;
`

const Category = styled.a`
  color:${props => categoriesColor[props.category]};
  display: block;
  font-family: Lato;
  font-size: 10px;
  line-height: 22.8px;
  text-decoration: none;
  text-transform: uppercase;
`

const StyledReadMore = styled(ReadMore)`

`

const NewsImage = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  &:hover ${StyledReadMore} {
    opacity: 1;
    visibility: visible;
  }
`

const Image = styled.img`
  margin: 8px 0 15px;
  width: 100%;
`

const Title = styled.a`
  color: #000000;
  font-family: Lato;
  font-size: 29px;
  font-weight: 600;
  text-decoration: none;
`

export default BigNews
