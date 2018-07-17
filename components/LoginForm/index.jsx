// import styled from 'styled-components'
import React, { Component } from 'react'
import { TextInput, Checkbox, Paper, Button } from 'cot-experience'
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
        // console.log(this.state)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
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
                    <Button solid type='submit' >
                        Click me
                    </Button>
                </form>
            </div>
        )
    }
}

export default LoginForm
