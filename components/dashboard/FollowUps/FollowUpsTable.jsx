import React from 'react'
import PropTypes from 'prop-types'
import Table from '../../lib/Table'
import { Checkbox } from 'cot-experience'

const FollowUpsTable = ({ items }) => {
  if (items.length === 0) {
    return <p>No items yet.</p>
  }
  return (
    <Table>
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
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.note}</td>
            <td>{item.dueTime}</td>
            <td>
              <Checkbox
                checked={item.completed}
                primary={item.completed} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

FollowUpsTable.propTypes = {
  items: PropTypes.array
}

export default FollowUpsTable
