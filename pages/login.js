import styled from 'styled-components'
import React, { Component } from 'react'
import LoginForm from '../components/auth/Login'

const Wrapper = styled.div`
  width: 100%;
`
class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrapper>
        <LoginForm></LoginForm>
      </Wrapper>
    )
  }
}

export default Login
