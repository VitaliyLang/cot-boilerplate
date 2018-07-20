import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HighlightStrip } from 'cot-experience'
import Table from '../Table'
import Link from 'next/link'

const Header = styled.h5`
  color: rgb(6, 31, 51);
  font-size: 16px;
  font-weight: 700;
  margin: 50px 0 10px;
`

const Last5Customers = ({ customers, fetchError }) => {
  return (
    <div>
      <Header>Last 5 customers viewed info</Header>
      {fetchError ? (
        <HighlightStrip style={{ bacgroundColor: 'rgba(255, 0, 0, .1)' }}>{fetchError}</HighlightStrip>
      ) : (
          <Table>
            <thead>
              <tr>
                <th>Locator ID</th>
                <th>Customer Name</th>
                <th>Bussiness Name</th>
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
        )}
    </div>
  )
}

Last5Customers.propTypes = {
  customers: PropTypes.array,
  fetchError: PropTypes.string
}

export default Last5Customers
