import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FollowUpsTable from './FollowUpsTable'
import { Tabs, Tab, HighlightStrip } from 'cot-experience'
import styled from 'styled-components'

const FollowUpsContainer = styled.div`
  margin-top: 50px;
  >div:first-child {
    width: 250px;
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
`

class FollowUps extends Component {
  static propTypes = {
    items: PropTypes.array,
    fetchError: PropTypes.string
  }

  state = {
    showComplete: false
  }

  render() {
    const { fetchError, items } = this.props
    const filteredItems = items.filter(item => item.completed === this.state.showComplete)
    return (
      <FollowUpsContainer>
        {fetchError ? (
          <HighlightStrip>{fetchError}</HighlightStrip>
        ) : (
            <Fragment>
              <Tabs onTabClicked={idx => this.setState({ showComplete: !!idx })}>
                <Tab title="Follow Up" />
                <Tab title="Complete" />
              </Tabs>
              <FollowUpsTable items={filteredItems} />
            </Fragment>
          )}
      </FollowUpsContainer>
    )
  }
}

const mapStateToProps = ({ followUps }) => ({
  items: followUps.items,
  fetchError: followUps.error
})

export default connect(mapStateToProps)(FollowUps)
