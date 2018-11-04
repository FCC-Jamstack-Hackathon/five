import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TitleContainer = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #011627;
`
const Title = styled.h1`
  margin: 0;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #addb67;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <TitleContainer>
    <Title>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </Title>
  </TitleContainer>
)

export default Header
