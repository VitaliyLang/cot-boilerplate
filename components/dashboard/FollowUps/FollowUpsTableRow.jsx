import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'cot-experience'
import { connect } from 'react-redux'
import { fetchSetComplete } from '../../../store/followUps/actions'

class FollowUpsTableRow extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    fetchSetComplete: PropTypes.func.isRequired
  }

  state = {
    complete: this.props.item.complete
  }

  handleChange = () => {
    const pendingValue = !this.props.item.complete
    this.setState({
      complete: pendingValue
    }, () => this.fetchSetComplete(pendingValue))
  }

  fetchSetComplete = async (pendingValue) => {
    try {
      await this.props.fetchSetComplete(this.props.item.id, pendingValue)
    } catch (e) {
      this.setState({
        complete: !pendingValue
      })
      alert('Failed to save changes.')
    }
  }

  render() {
    const { item } = this.props
    const { complete } = this.state
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.note}</td>
        <td>{item.dueTime}</td>
        <td>
          <Checkbox
            handleClicked={this.handleChange}
            checked={complete}
            primary={complete} />
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSetComplete: (id, complete) => dispatch(fetchSetComplete(id, complete))
})

export default connect(null, mapDispatchToProps)(FollowUpsTableRow)
