import { Button, TextInput } from 'cot-experience'
import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import fetchApi from '../../lib/fetchApi'
import Link from 'next/link'
import Dropdown from '../lib/Dropdown'
import OutsideAlerter from 'cot-experience/dist/components/OutsideAlerter/OutsideAlerter'

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  position: relative;
  > div {
    flex-grow: 1
  }
`

const SearchInput = styled(TextInput)`
  width: 100%;
  border-right: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
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
const CustomersDropdown = styled(Dropdown)`
  top: 110%;
  left: 0;
  width: 90%;
`

class SearchBar extends Component {
  state = {
    searchValue: '',
    customers: []
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { searchValue } = this.state
    if (searchValue === '') {
      this.setState({ customers: [] })
    } else {
      try {
        const customers = await fetchApi('/customers')
        this.setState({ customers })
      } catch(e) {
        alert('Failed to fetch results.')
      }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { customers } = this.state
    return (
      <OutsideAlerter handleClickOutsideElement={() => this.setState({ customers: [] })}>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            placeholder='Search customer'
            onChange={this.handleChange}
            name='searchValue' />
          <SearchButton primary solid icon='search' />
          {!!customers.length &&
            <CustomersDropdown>
              {customers.map(item => (
                <Link href={`${item._id}/dashboard`} key={item._id}>
                  <a>{item.name}</a>
                </Link>
              ))}
            </CustomersDropdown>
          }
        </SearchForm>
      </OutsideAlerter>
    )
  }
}

export default withTheme(SearchBar)
