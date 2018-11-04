import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GlobalStyle from '../shared/globalStyles'
import Item from '../components/item'

const IndexPage = () => (
  <Layout>
    <Item url="/page-2/">The Complete JavaScript Handbook </Item>
    <Item to="/page-2/">A Software Engineering Survival Guide</Item>
    <Item to="/page-2/">How to build your own classic 1970s
Simon flashing light game using JavaScript</Item>
    <Item to="/page-2/">A quick introduction to computer networks</Item>
    <GlobalStyle />
  </Layout>
)

export default IndexPage
