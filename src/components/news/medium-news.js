'use strict'

import React from 'react'
import styled from 'styled-components'

import Author from 'components/author'
import ReadMore from './read-more'
import { categoriesColor } from 'utils/categoriesColor'

const MediumNews = ({news, author}) => (
  <Container>
    <Category category={news.category} href='#'>{news.category}</Category>

    <NewsImage href='#' >
      <StyledReadMore />
      <Image src={news.urlImage} />
    </NewsImage>

    <Title href='#'>{news.title}</Title>

    <Author authorId={news.author} />

    <Content>{news.content}</Content>

  </Container>
)

const Container = styled.div`
  width: 262px;
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
  font-size: 14px;
  padding: 9px 21px;
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
  margin-bottom: 15px;
  margin-top: 8px;
  width: 100%;
`

const Title = styled.a`
  color: #000000;
  font-family: Lato;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
`

const Content = styled.p`
  color: #686868;
  font-family: OpenSans;
  font-size: 14px;
  line-height: 22.8px;
  margin: 20px 0 0;  
`

export default MediumNews
