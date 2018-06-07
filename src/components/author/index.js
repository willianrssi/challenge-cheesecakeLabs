'use strict'

import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Author = ({authorId, authors, big}) => (
  !!authors[authorId] && <Container>
    <Image big={big} src={authors[authorId].urlImage} />
    <Name href='#'><i>by {authors[authorId].name}</i></Name>
  </Container>
  )

const mapStateToProps = (state) => ({
  authors: state.authors
})

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 10px 0 0 0;
  width: 100%;
`

const Image = styled.img`
  border-radius: 50%;
  height: ${props => props.big ? '45px' : '32px'};
  width: ${props => props.big ? '45px' : '32px'};
`

const Name = styled.a`
  color: #808080;
  font-family: Lato;
  font-size: 13px;
  margin-left: 10px;
  text-decoration: none;
`

export default connect(mapStateToProps)(Author)
