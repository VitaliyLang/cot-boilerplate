// import styled from 'styled-components'
import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default Login
