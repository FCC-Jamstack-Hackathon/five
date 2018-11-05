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
    <Item type="tech" url="/detail/">
      Japanese Sumo Robots{' '}
    </Item>
    <Item type="audio" url="/detail/">
      The Kevin Rose Show with Bill Marris
    </Item>
    <Item type="book" url="/detail/">
      Your smartphone is making you stupid
    </Item>
    <Item type="tech" url="/detail/">
      Samurai Armor for your pets
    </Item>
    <Item type="audio" url="/detail/">
      The Kevin Rose Show with Sean Ellis
    </Item>
  </Container>
)
