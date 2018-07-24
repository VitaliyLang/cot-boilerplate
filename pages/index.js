import React, { Component } from 'react'
import fetchApi from '../lib/fetchApi'
import Last5Customers from '../components/dashboard/Last5Customers'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'

export default class Homepage extends Component {
  static async getInitialProps() {
    let fetchError, customers
    try {
      customers = await fetchApi('/customers?_start=0&_limit=5')
    } catch (e) {
      fetchError = 'Failed to fetch.'
    }
    return { customers, fetchError }
  }

  static propTypes = {
    customers: PropTypes.array,
    fetchError: PropTypes.string
  }

  render() {
    const props = this.props
    return (
      <Box width='calc(100% - 55px)'>
        <Last5Customers {...props} />
      </Box>
    )
  }
}
