import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  maxwidth: 960;
  padding: 0 0.5rem 1rem 0.5rem;
  color: #9CA2AB;

  @media (min-width: 768px) {
    & {
      padding: 0 1rem 1rem 1rem;
    }
  }
`

const Copyright = styled.span`
  text-align: center;
`

const About = styled.span`
  text-align: center;
`

export default () => (
  <Container>
    <Copyright>
      © Five 🖐 2018
    </Copyright>
    <About>
      <Link to="/about/">Meet the team! ⚡️</Link>
    </About>
  </Container>
)