import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Book from '../icons/book'
import JS from '../icons/js'
import Audio from '../icons/audio'
import Tech from '../icons/tech'

const IconPicker = type => {
  switch (type) {
    case 'js':
      return <JS />
    case 'book':
      return <Book />
    case 'audio':
      return <Audio />
    default:
      return <Tech />
  }
}

const Item = ({ children, type, url }) => (
  <div className="item-container">
    {IconPicker(type)}
    <Link to={url}>{children}</Link>
  </div>
)

Item.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Item
