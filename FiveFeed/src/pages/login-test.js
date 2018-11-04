import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

import { Link } from 'gatsby'

import netlifyIdentity from 'netlify-identity-widget'

class LoginTest extends Component {
  getLambda(data, functionName) {
    axios.post(process.env.GATSBY_LAMBDA_ENDPOINT + functionName, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    })
  }

  generateHeaders() {
    const headers = { 'Content-Type': 'application/json' }
    if (netlifyIdentity.currentUser()) {
      return netlifyIdentity
        .currentUser()
        .jwt()
        .then(token => {
          return { ...headers, Authorization: `Bearer ${token}` }
        })
    }
    return Promise.resolve(headers)
  }

  clickHandler = e => {
    e.preventDefault()
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => console.log('login', user))
    // store token in localstorage
    this.generateHeaders().then(headers => {
      // GET request
      //
      //   USE IN LAMBDA:
      // const claims = context.clientContext && context.clientContext.user;
      //   if (!claims) {
      //     return callback(null, { statusCode: 401, body: "You must be signed in to call this function" });
      //   }
    })
  }
  testHandler = e => {
    e.preventDefault()
    console.log(process.env.GATSBY_FAUNA_KEY)
    this.getLambda({ name: 'Justin' }, 'GetUser')
      .then((err, res) => console.log(res))
      .catch(err => console.log(err))
    //
    //   USE IN LAMBDA:
    // const claims = context.clientContext && context.clientContext.user;
    //   if (!claims) {
    //     return callback(null, { statusCode: 401, body: "You must be signed in to call this function" });
    //   }
  }
  render() {
    return (
      <Layout>
        <h1>Hi from the login test page</h1>
        <button onClick={this.clickHandler}>Login</button>
        <button onClick={this.testHandler}>Test</button>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default LoginTest
