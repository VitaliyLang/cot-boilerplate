import styled from 'styled-components'
import React, { Component } from 'react'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  height: 100vh;
`
class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <Wrapper>
        <h1>Forgot pwd</h1>
      </Wrapper>
      </div>
    )
  }
}

export default Login
