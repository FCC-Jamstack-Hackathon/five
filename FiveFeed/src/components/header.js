import React from 'react'
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
  color: #addb67;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <div>
    <TitleContainer>
      <Title>{siteTitle}</Title>
    </TitleContainer>
  </div>
)

export default Header
