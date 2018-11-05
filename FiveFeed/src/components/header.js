import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`
const Title = styled.h1`
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
  </Container>
)

export default Header
