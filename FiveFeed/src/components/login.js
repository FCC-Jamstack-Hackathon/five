import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

class Login extends Component {
  constructor() {
    super()

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn() {
    // You can import the widget into any component and interact with it.
    netlifyIdentity.open()
  }

  render() {
    return (
      <>
        <button onClick={this.handleLogIn}>Log in with netlify</button>
      </>
    )
  }
}

export default Login
