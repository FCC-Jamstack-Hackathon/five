import React from 'react'

import Layout from '../components/layout'
import Item from '../components/item'
import GlobalStyle from '../shared/globalStyles'

const IndexPage = () => (
  <Layout>
    <Item url="/detail/">The Complete JavaScript Handbook </Item>
    <Item url="/detail/">A Software Engineering Survival Guide</Item>
    <Item url="/detail/">How to build your own classic 1970s
Simon flashing light game using JavaScript</Item>
    <Item url="/detail/">A quick introduction to computer networks</Item>
    <GlobalStyle />
  </Layout>
)

export default IndexPage
