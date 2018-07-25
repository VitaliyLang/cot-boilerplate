import React, { Component } from 'react'
import { TextInput } from 'cot-experience'
import { connect } from 'react-redux'
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
    type: PropTypes.string,
    errorMessage: PropTypes.string,
    minLength: PropTypes.number,
    required: PropTypes.string,
    full: PropTypes.boolean,
  };
  static defaultProps = {
    type: 'text',
  }
  state = {
    fieldValue: '',
    errorMessage: null,
  }

  onChange = e => {
    this.setState({ fieldValue: e.target.value })
    if (this.state.fieldValue.length >= this.props.minLength - 1) {
      this.setState({
        errorMessage: null,
        isValid: true
      })
    }
  }

  validateField() {
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
    return (
        <StyledTextInput
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required={this.state.errorMessage ? true : null}
          error={this.state.errorMessage}
          value={this.state.value}
          onBlur={() => this.validateField()}
          onChange={this.onChange}
          full={this.props.full}
        /> 
    )
  }
}

export default connect()(Input)
