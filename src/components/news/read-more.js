'use strict'

import React from 'react'
import styled from 'styled-components'

const ReadMore = ({className}) => (
  <ReadMoreStyled className={className} >
    Read More
  </ReadMoreStyled>
)

const ReadMoreStyled = styled.div`
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #FFF;
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 32px;
  position:absolute;
  opacity: 0;
  transition: opacity 600ms, visibility 600ms;
  visibility: hidden;
`

export default ReadMore
