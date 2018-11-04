import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import LoginButton from './login'

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  justify-content: center;
`
const Title = styled.h1`
  grid-column-start: 2;
  margin: 0;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #addb67;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Title>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </Title>
    <LoginButton />
  </Container>
)

export default Header
