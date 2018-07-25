import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Heading1, Paper, Button } from 'cot-experience'
import Input from '../../lib/Input/TextInput'

const ComponentWrapper = styled.section`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  header {
    padding: 10px 20px;
    background-color: #f4f4f4;
    border-radius: 5px 5px 0 0;
    border: 1px solid #bebebe;
    border-bottom: none;
    img {
      width: 150px;
    }
  }
  button {
    width: 95%;
    margin: 20px auto;
    = background-color: #ddd;
  }
`

class ResetPassword extends Component {
  render() {
    return (
      <ComponentWrapper>
        <Heading1>Forgot password?</Heading1>
        <header>
          <img src="../static/images/logo-text.png" alt="CapitalOnTap logo" />
        </header>
        <form onSubmit={this.onSubmit}>
          <Paper>
            <Input
              name='email'
              placeholder='Email'
              type='email'
              full
            />
          </Paper>
          <Button type='submit' full>Send</Button>
        </form>
      </ComponentWrapper>
    )
  }
}
export default connect()(ResetPassword)
