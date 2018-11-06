import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LoginButton from './login'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 75% 1fr;
  margin: 0 auto;
  maxwidth: 960;
  padding: 0.75rem 0.5rem 0.5rem 0.5rem;
  justify-content: center;

  @media (min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr 50% 1fr 1fr;
      padding: 1.5rem 1rem 0 1rem;
    }
  }
`
const Title = styled.h1`
  grid-column-start: 2;
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    grid-column-start: 3;
  }
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

Header.propTypes = { siteTitle: PropTypes.string.isRequired }

export default Header
