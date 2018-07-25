import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FollowUpsTable from './FollowUpsTable'
import { Tabs, Tab, HighlightStrip } from 'cot-experience'
import styled from 'styled-components'
import { fetchClearComplete } from '../../../store/followUps/actions'

const FollowUpsContainer = styled.div`
  margin-top: 50px;
  >div:first-child {
    width: ${props => props.error ? '100%' : '250px'};
    a {
      font-size: 18px;
    }
  }
  table th, table td {
    &:nth-child(1) {
      flex-basis: 250px;
    }
    &:nth-child(2) {
      flex-basis: calc(25% - 175px);
    }
    &:nth-child(3) {
      flex-basis: 45%;
    }
    &:nth-child(4) {
      flex-basis: calc(30% - 175px);
    }
    &:nth-child(5) {
      flex-basis: 100px;
      justify-content: flex-end;
    }
    span {
      margin-right: 0;
    }
  }
  .bottom-button-bar {
    text-align: right;
  }
`

class FollowUps extends Component {
  static propTypes = {
    items: PropTypes.array,
    fetchError: PropTypes.string,
    fetchClearComplete: PropTypes.func.isRequired
  }

  state = {
    showComplete: false
  }

  fetchClearComplete = async () => {
    try {
      await this.props.fetchClearComplete()
    } catch (e) {
      alert('Operation Failed')
    }
  }

  render() {
    const { fetchError, items } = this.props
    if (fetchError) {
      return (
        <FollowUpsContainer error>
          <HighlightStrip>{fetchError}</HighlightStrip>
        </FollowUpsContainer>
      )
    } else if (items.length === 0) {
      return null
    }
    const filteredItems = items.filter(item => item.complete === this.state.showComplete)
    return (
      <FollowUpsContainer>
        <Tabs onTabClicked={idx => this.setState({ showComplete: !!idx })}>
          <Tab title="Follow Up" />
          <Tab title="Complete" />
        </Tabs>
        <FollowUpsTable
          fetchClearComplete={this.fetchClearComplete}
          items={filteredItems}
          complete={this.state.showComplete} />
      </FollowUpsContainer>
    )
  }
}

const mapStateToProps = ({ followUps }) => ({
  items: followUps.items,
  fetchError: followUps.error
})

const mapDispatchToProps = dispatch => ({
  fetchClearComplete: () => dispatch(fetchClearComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowUps)
