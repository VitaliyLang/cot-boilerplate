// import styled from 'styled-components'
import React, { Component } from 'react'
import { TextInput, Checkbox, Paper, Button } from 'cot-experience'
import { connect } from 'react-redux'
import { login } from '../../store/auth/actions'
// import { Box, Flex } from 'grid-styled'
// import Link from 'next/link'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        // console.log(e.target)
      this.props.login();
        // console.log(this.state)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    UNSAFE_componentWillMount () {
      // this.props.login();
    }
    render() {
        return (
                <form onSubmit={this.onSubmit}>
                    <Paper>
                        <TextInput
                            name='username'
                            placeholder='Username'
                            onChange={this.onChange}
                        />
                        <TextInput
                            name='password'
                            placeholder='Password'
                            onChange={this.onChange}
                        />
                        <Checkbox label='Remember me' />
                    </Paper>
                    <Button solid type='submit'>
                        Click me
                    </Button>
                </form>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    //what you want from the store
  }
} 
const  mapDispatchToProps = dispatch => {
  return {
    login: () => 
    dispatch(
      login()
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
