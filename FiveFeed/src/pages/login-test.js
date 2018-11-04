import React, { Component } from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'

import netlifyIdentity from 'netlify-identity-widget'

class LoginTest extends Component {
  clickHandler = () => {
    netlifyIdentity.open()
  }
  render() {
    return (
      <Layout>
        <h1>Hi from the login test page</h1>
        <button onClick={this.clickHandler}>Login</button>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default LoginTest
