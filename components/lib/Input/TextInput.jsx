import React, { Component } from 'react'
import { TextInput } from 'cot-experience'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextInput = styled(TextInput)`
  width: ${props => props.theme.width};
  padding: ${props => props.theme.padding};
  &::placeholder {
    color: #aaa;
  }
`

StyledTextInput.defaultProps = {
  width: '350px',
}
class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    minLength: PropTypes.number,
    required: PropTypes.bool,
    full: PropTypes.bool,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    type: 'text',
  }
  state = {
    fieldValue: '',
    errorMessage: null,
  }

  onChange = e => {
    const { name, value, type } = e.target
    const { minLength, onChange } = this.props
    let res = {}
    if (minLength && e.target.value.length >= minLength) {
      res = {
        isValid: true,
        errorMessage: null
      }
    } else if (type === 'email' && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      res = {
        isValid: true,
        errorMessage: null
      }
    } 
    else {
      res = {
        isValid: false,
      }
    }
    this.setState({ fieldValue: e.target.value, isValid: res.isValid, errorMessage: res.errorMessage }, () => {
      onChange(name, value, this.state.isValid)
    })
  }

  validateField = () => {
    const { type, minLength } = this.props
    const { fieldValue, errorMessage } = this.state
    let currentErrorMessage = errorMessage
    if (type === 'email' && !fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      currentErrorMessage = 'Email is invalid.'
    } else if (minLength && fieldValue.length < minLength) {
      currentErrorMessage = `This filed should have at least ${minLength} characters.`
    } else {
      currentErrorMessage = null
    }
    this.setState({
      errorMessage: currentErrorMessage,
      isValid: currentErrorMessage === null
    })
  }

  render() {
    const { name, type, placeholder, full } = this.props
    const { errorMessage, value } = this.state
    return (
      <StyledTextInput
        name={name}
        type={type}
        placeholder={placeholder}
        required={errorMessage ? true : null}
        error={errorMessage}
        value={value}
        onBlur={this.validateField}
        onChange={this.onChange}
        full={full}
      />
    )
  }
}

export default Input
