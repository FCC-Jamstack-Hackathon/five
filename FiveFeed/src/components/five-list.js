import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Container>
    <Item type="js" url="/detail/">The Complete JavaScript Handbook </Item>
    <Item type="audio" url="/detail/">A Software Engineering Survival Guide</Item>
    <Item type="book" url="/detail/">How to build your own classic 1970s
Simon flashing light game using JavaScript</Item>
    <Item type="tech" url="/detail/">A quick introduction to computer networks</Item>
    <Item type="react" url="/detail/">4 Examples of the useState Hook</Item>
  </Container>
)