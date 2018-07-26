import styled from 'styled-components'
import React, { Component, Fragment } from 'react'
import { Checkbox, Paper, Button } from 'cot-experience'
import { connect } from 'react-redux'
import Input from '../../lib/Input/TextInput'
import Link from 'next/link'

const FormWrapper = styled.div`
  input {
    margin-bottom: 20px;
  }
`
const Header = styled.section`
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-radius: 5px 5px 0 0;
  border: 1px solid #bebebe;
  border-bottom: none;
  img {
    width: 150px;
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledInput = styled(Input)`
  background: palevioletred;
  span {
    margin-bottom: 10px;
  }
`
const StyledPaper = styled(Paper)`
width: 100%;
`
const SubmitBtn = styled(Button)`
  margin-top: 20px;
  width: 95%;
  background-color: #ddd;
`
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
    console.log(this.state)
  }
  onChange = (field, value) => {
    this.setState({ [field]: value })
    console.log(value)
  }

  render() {
    return (
      <FormWrapper>
        <Header>
          <img src="../static/images/logo-text.png" alt="CapitalOnTap logo" />
        </Header>
        <StyledForm onSubmit={this.onSubmit}>
          <StyledPaper>
            <Fragment>
              <StyledInput
                name="username"
                type='text'
                minLength={3}
                placeholder='Username'
                value={this.state.username}
                full
                onChange={this.onChange}
              />
              <StyledInput
                name="password"
                type='password'
                minLength={6}
                placeholder='Password'
                value={this.state.password}
                full
                call={this.change}
                onChange={this.onChange}
              />
            </Fragment>
            <Footer>
              <Checkbox label='Remember me' />
              <Link href='/forgot-password'><a>Forgot password?</a></Link>
            </Footer>
          </StyledPaper>
          <SubmitBtn full type='submit'>Log In</SubmitBtn>
        </StyledForm>
      </FormWrapper>
    )
  }
}

export default connect()(LoginForm)
