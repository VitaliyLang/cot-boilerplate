import { Button, TextInput } from 'cot-experience'
import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { apiBaseUrl } from '../../constants'

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  > div {
    flex-grow: 1
  }
`

const SearchInput = styled(TextInput)`
  width: 100%;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  flex-basis: 10%;
  i {
    color: #fff;
  }
`

class SearchBar extends Component {
  componentDidMount() {
    fetch(`${apiBaseUrl}/posts/1`)
  }
  render() {
    return (
      <SearchForm>
        <SearchInput placeholder='Search customer' type='email' />
        <SearchButton primary solid icon='search' />
      </SearchForm>
    )
  }
}

SearchBar.propTypes = {}

export default withTheme(SearchBar)
