import styled from 'styled-components'
import React, { Component, Fragment } from 'react'
import ForgotPassword from '../components/auth/ForgotPassword' 
const Wrapper = styled(Fragment)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ForgotPasswordStyled = styled(ForgotPassword)`
  width: 100%;
`
class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrapper>
        <ForgotPasswordStyled></ForgotPasswordStyled>
      </Wrapper>
    )
  }
}

export default Login
