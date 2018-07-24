import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HighlightStrip } from 'cot-experience'
import Table from '../../lib/Table'
import Link from 'next/link'

const Last5CustomersContainer = styled.div`
  h5 {
    color: rgb(6, 31, 51);
    font-size: 18px;
    font-weight: 700;
    margin: 50px 0 10px;
  }
  th, td {
    &:nth-child(1) {
      flex-basis: 20%;
    }
    &:nth-child(2), &:nth-child(3) {
      flex-basis: 40%;
    }
    &:nth-child(4) {
      flex-basis: 145px;
      text-align: center;
    }
  }
`

const Last5Customers = ({ customers, fetchError }) => {
  let layout
  if (fetchError) {
    layout = (<HighlightStrip>{fetchError}</HighlightStrip>)
  } else if (customers.length === 0) {
    layout = (<p>No customers viewed</p>)
  } else {
    layout = (
      <Table>
        <thead>
          <tr>
            <th>Locator ID</th>
            <th>Customer Name</th>
            <th>Bussiness Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map(item => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>
                <Link href={`${item._id}/dashboard`} key={item._id}>
                  <a>Go to profile</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
  return (
    <Last5CustomersContainer>
      <h5>Last 5 customers viewed info</h5>
      {layout}
    </Last5CustomersContainer>
  )
}

Last5Customers.propTypes = {
  customers: PropTypes.array,
  fetchError: PropTypes.string
}

export default Last5Customers
