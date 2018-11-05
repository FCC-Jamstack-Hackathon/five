import React from 'react'
// import axios from 'axios'

import Layout from '../components/layout'
import FiveList from '../components/five-list'
import FiveList2 from '../components/five-list2'
import FiveList3 from '../components/five-list3'
import PeopleList from '../components/people-list'
import ModalWrapper from '../components/modal-wrapper'

// function getLambda(data, functionName) {
//   axios.post(process.env.LAMBDA_ENDPOINT + functionName, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       data,
//     }),
//   })
// }

export default class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      centerPersonIndex: 0,
      isModalOn: false,
    }

    this.onPersonChanged = this.onPersonChanged.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.bringModal = this.bringModal.bind(this)
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
        />
        {this.state.centerPersonIndex === 0 ? (
          <FiveList />
        ) : this.state.centerPersonIndex === 1 ? (
          <FiveList2 />
        ) : this.state.centerPersonIndex === 2 ? (
          <FiveList3 />
        ) : (
          <FiveList />
        )}
        <ModalWrapper
          isModalOn={this.state.isModalOn}
          hideModal={this.hideModal}
        />
      </Layout>
    )
  }
}
