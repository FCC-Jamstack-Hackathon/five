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
    <Item type="book" url="/detail/">Paul Singer, Doomsday Investor </Item>
    <Item type="audio" url="/detail/">Won't You Be My Neighbor?</Item>
    <Item type="tech" url="/detail/">Corkcicle Whiskey Wedge</Item>
    <Item type="tech" url="/detail/">C.L. Butaud’s 100% Texas tempranillo</Item>
    <Item type="book" url="/detail/">Athletic Greens</Item>
  </Container>
)