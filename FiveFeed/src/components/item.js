import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Book from '../icons/book'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px 0;

  svg {
    margin-bottom: 20px;
  }
`

export default ({ children, url }) => (
  <Wrapper>
    <Book />
    <Link to={url}>{children}</Link>
  </Wrapper>
)
