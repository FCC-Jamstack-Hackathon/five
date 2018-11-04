import React from 'react';

const CollectionItem = ({ icon, link, linkText }) => (
  <div>
    <p>Icon</p>
    <p><a href={link}>{linkText}</a></p>
  </div>
)

export default CollectionItem;