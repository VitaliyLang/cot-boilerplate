import styled, { ThemeProvider } from 'styled-components'
import React, { Component, Fragment } from 'react'
import { Checkbox, Paper, Button } from 'cot-experience'
import { connect } from 'react-redux'
import Input from '../Inputs/TextInput'
import Link from 'next/link'

const FormWrapper = styled.div`
  input {
    margin-bottom: 20px;
  }
`
const Header = styled.section`
  padding: 10px 20px;
  background-color: lightgray;
  border-radius: 5px 5px 0 0;
  img {
    width: 150px;
  }
`
const StyledInput = styled(Input)`
  background: palevioletred;
  span {
    margin-bottom: 10px;
  }
`
const SubmitBtn = styled(Button)`
  background: lightgray;
  margin-top: 20px;
`
const InputStyling = {
  width: '500px'
}
const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
  }
`

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Fragment>
        <FormWrapper>
          <Header>
            <img src="../static/images/logo-text.png" alt="CapitalOnTap logo" />
          </Header>
          <form onSubmit={this.onSubmit}>
            <Paper>
              <ThemeProvider theme={InputStyling}>
                <Fragment>
                  <StyledInput
                    name="username"
                    type='text'
                    minLength={3}
                    placeholder='username here'
                    value={this.state.username}
                  />
                  <StyledInput
                    name="password"
                    type='password'
                    minLength={6}
                    placeholder='Password here'
                    value={this.state.password}
                  />
                </Fragment>
              </ThemeProvider>
              <Footer>
                <Checkbox label='Remember me' />
                <Link href='/forgot'>Forgot password?</Link>
              </Footer>
            </Paper>
            <SubmitBtn full type='submit'>Log In</SubmitBtn>
          </form>
        </FormWrapper>
      </Fragment>
    )
  }
}

export default connect()(LoginForm)
