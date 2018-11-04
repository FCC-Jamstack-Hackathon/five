import React from 'react'

import Layout from '../components/layout'
import PeopleList from '../components/people-list';
import Collection from '../components/collection';

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      centerPersonIndex: 0,
    }

    this.onPersonChanged = this.onPersonChanged.bind(this);
  }

  onPersonChanged(index) {
    this.setState({
      centerPersonIndex: index,
    })
  }

  render() {
    return (
      <Layout>
        <PeopleList
          onPersonChanged={this.onPersonChanged}
          centerPersonIndex={this.state.centerPersonIndex}
        />
        <Collection />
      </Layout>
    )
  }
}

