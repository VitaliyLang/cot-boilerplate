import React, { Component } from 'react'
import fetchApi from '../lib/fetchApi'
import Last5Customers from '../components/dashboard/Last5Customers'
import FollowUps from '../components/dashboard/FollowUps'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import { fetchFollowUps } from '../store/followUps/actions'
import { connect } from 'react-redux'

class Homepage extends Component {
  static async getInitialProps({ store }) {
    const fetchLast5 = async () => {
      let fetchError, customers
      try {
        customers = await fetchApi(true, '/customers?_start=0&_limit=5')
      } catch (e) {
        fetchError = 'Failed to fetch.'
      }
      return { customers, fetchError }
    }

    const last5Customers = await fetchLast5()
    await store.dispatch(fetchFollowUps())
    return { last5Customers }
  }

  static propTypes = {
    last5Customers: PropTypes.object
  }

  render() {
    const { last5Customers } = this.props
    return (
      <Box width='calc(100% - 55px)'>
        <FollowUps />
        <Last5Customers {...last5Customers} />
      </Box>
    )
  }
}

export default connect()(Homepage)
