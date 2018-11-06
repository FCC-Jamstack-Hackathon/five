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
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (min-width: 768px) {
    & {
      padding: 0 1rem 1rem 1rem;
    }
  }
`
const Span = styled.span`
  text-align: center;
`

export default () => (
  <Container>
    <Span>© Five <span role="img" aria-label="five">🖐</span> 2018</Span>
    <Span>
      <Link to="/about/">Meet the team! <span role="img" aria-label="bolt">⚡</span>️</Link>
    </Span>
  </Container>
)