import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Book from '../icons/book'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px 0;
`

const Item = ({ children, url }) => (
  <Wrapper>
    <Book />
    <Link to={url}>{children}</Link>
  </Wrapper>
)

Item.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Item
