import React from 'react'

import Layout from '../components/layout'
import Item from '../components/item'

import GlobalStyle from '../shared/globalStyles'
import PeopleList from '../components/people-list';
import Collection from '../components/collection';
import ModalWrapper from '../components/modal-wrapper';

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      centerPersonIndex: 0,
      isModalOn: false,
    }

    this.onPersonChanged = this.onPersonChanged.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.bringModal = this.bringModal.bind(this);
  }

  onPersonChanged(index) {
    this.setState({
      centerPersonIndex: index,
    })
  }

  hideModal() {
    this.setState({
      isModalOn: false,
    })
  }

  bringModal() {
    this.setState({
      isModalOn: true,
    })
  }

  render() {
    return (
      <Layout>
        <PeopleList
          onPersonChanged={this.onPersonChanged}
          centerPersonIndex={this.state.centerPersonIndex}
          bringModal={this.bringModal}
        />
        <Collection />
        <Item url="/detail/">The Complete JavaScript Handbook </Item>
        <Item url="/detail/">A Software Engineering Survival Guide</Item>
        <Item url="/detail/">How to build your own classic 1970s
Simon flashing light game using JavaScript</Item>
        <Item url="/detail/">A quick introduction to computer networks</Item>
        <GlobalStyle />
        <ModalWrapper
          isModalOn={this.state.isModalOn}
          hideModal={this.hideModal}
        />
      </Layout>
    )
  }
}

