import React from 'react'
import PropTypes from 'prop-types'
import ThemedTable from '../../lib/ThemedTable'
import { Button, HighlightStrip } from 'cot-experience'
import FollowUpsTableRow from './FollowUpsTableRow'
import styled from 'styled-components'

const EmptyMessageContainer = styled.div`
  margin-top: 15px;
`

const FollowUpsTable = ({ items, complete, fetchClearComplete }) => {
  if (items.length === 0 && complete) {
    return (
      <EmptyMessageContainer >
        <HighlightStrip>No completed follow ups.</HighlightStrip>
      </EmptyMessageContainer>
    )
  }
  return (
    <ThemedTable maxBodyHeight='180px'>
      <table>
        <thead>
          <tr>
            <th>Locator ID</th>
            <th>Company Name</th>
            <th>Note</th>
            <th>Due Time</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <FollowUpsTableRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
      {complete &&
        <div className='bottom-button-bar'>
          <Button onClick={fetchClearComplete}>
            Empty All
          </Button>
        </div>
      }
    </ThemedTable>
  )
}

FollowUpsTable.propTypes = {
  items: PropTypes.array,
  complete: PropTypes.bool.isRequired,
  fetchClearComplete: PropTypes.func.isRequired
}

export default FollowUpsTable
