import styled from 'styled-components'
import React, { Component, Fragment } from 'react'
import ResetPassword from '../components/auth/ResetPassword' 
const Wrapper = styled(Fragment)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ResetPasswordStyled = styled(ResetPassword)`
  width: 100%;
`
class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrapper>
        <ResetPasswordStyled></ResetPasswordStyled>
      </Wrapper>
    )
  }
}

export default Login
