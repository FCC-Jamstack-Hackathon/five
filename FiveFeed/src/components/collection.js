import React from 'react';

import CollectionItem from './collection-item';

export default class Collection extends React.Component {
  render() {
    return (
      <div>
        <CollectionItem
          icon=""
          link="google.com"
          linkText="Go to Google"
        />
        <CollectionItem
          icon=""
          link="nytimes.com"
          linkText="Go to NY Times"
        />
        <CollectionItem
          icon=""
          link="facebook.com"
          linkText="Go to Facebook"
        />
        <CollectionItem
          icon=""
          link="twitter.com"
          linkText="Go to Twitter"
        />
      </div>
    )
  }
}