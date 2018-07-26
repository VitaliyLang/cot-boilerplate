import styled from 'styled-components'
import React, { Component, Fragment } from 'react'
import { Checkbox, Paper, Button } from 'cot-experience'
import { connect } from 'react-redux'
import Input from '../../lib/Input/TextInput'
import { Link } from '../../../routes'
import Header from '../Header'

const FormWrapper = styled.div`
  input {
    margin-bottom: 20px;
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
    password: '',
    usernameValid: false,
    passwordValid: false,
    isFormValid: false,
  }
  onSubmit = e => {
    e.preventDefault()
  }
  onChange = (field, value, isValid) => {
    this.setState({ [field]: value, [`${field}Valid`]: isValid }, () => {
      // this.checkValidation()
    })
  }
  // checkValidation = () => {
  //   if(this.state.usernameValid && this.state.passwordValid){
  //     this.setState({isFormValid: true})
  //   }
  // }
  render() {
    return (
      <FormWrapper>
        <Header/>
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
              <Link route='/forgot-password'><a>Forgot password?</a></Link>
            </Footer>
          </StyledPaper>
          <SubmitBtn full type='submit' disabled={!this.state.usernameValid || !this.state.passwordValid}>Log In</SubmitBtn>
        </StyledForm>
      </FormWrapper>
    )
  }
}

export default connect()(LoginForm)
