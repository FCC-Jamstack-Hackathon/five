import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import GlobalStyle from '../shared/globalStyles'

const IndexPage = () => (
  <Layout>
    <h1>five feed</h1>
    <p>five feed</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
    <GlobalStyle />
  </Layout>
)

export default IndexPage
