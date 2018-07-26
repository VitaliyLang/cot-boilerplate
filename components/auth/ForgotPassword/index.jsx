import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Heading1, Paper, Button } from 'cot-experience'
import Input from '../../lib/Input/TextInput'
import Header from '../Header'

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
    background-color: #ddd;
  }
`
class ForgotPassword extends Component {
  state = {
    email: '',
    emailValid: false
  }
  onSubmit = e => {
    e.preventDefault()
  }
  onChange = (field, value, isValid) => {
    this.setState({ [field]: value, [`${field}Valid`]: isValid }, () => {
    })    
  }
  render() {
    return (
      <ComponentWrapper>
        <Heading1>Forgot password?</Heading1>
        <Header/>
        <form onSubmit={this.onSubmit}>
          <Paper>
            <Input
              name='email'
              placeholder='Email'
              type='email'
              full
              onChange={this.onChange}
            />
          </Paper>
          <Button type='submit' full disabled={!this.state.emailValid}>Send</Button>
        </form>
      </ComponentWrapper>

    )
  }
}

export default connect()(ForgotPassword)
