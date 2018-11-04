import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Book from '../icons/book'

const Item = ({ children, url }) => (
  <div className="item-container">
    <Book />
    <Link to={url}>{children}</Link>
  </div>
)

Item.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Item
