'use strict'

import React from 'react'
import styled from 'styled-components'

import logo from 'images/logo.png'

const Header = () => (
  <StyledHeader>
    <Container>
      <Logo href='#'>
        <img src={logo} />
      </Logo>
      <Menu>
        <Link href='#'>politics</Link>
        <Link href='#'>business</Link>
        <Link href='#'>tech</Link>
        <Link href='#'>science</Link>
        <Link href='#'>sports</Link>
      </Menu>
    </Container>
  </StyledHeader>
)

const StyledHeader = styled.header`
  border-bottom: 1px solid #979797;
  display: flex;
  justify-content: center;
  height: 56px;
  min-width: max-content;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 1400px;
`
const Logo = styled.a`
  height: 45px;
  margin-left: 131px;
  width: 45px;
`

const Menu = styled.nav`
  margin-right: 146px;
`

const Link = styled.a`
  color: #3E433E;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  margin-left: 29px;
  text-decoration: none;
  text-transform: uppercase;
`

export default Header
