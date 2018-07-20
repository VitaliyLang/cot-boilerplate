import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import OutsideAlerter from 'cot-experience/dist/components/OutsideAlerter/OutsideAlerter'
import Dropdown from '../Dropdown'

const DropdownContainer = styled.div`
  position: relative;
  margin-right: 15px;
`
const ActionsDropdownBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`
const ActionsDropdown = styled(Dropdown)`
  width: 170px;
  right: 0;
  top: 100%;
  button, a {
    font-weight: bold;
    text-align: right;
    font-size: 14px;
  }
`
const AdminAvatar = styled.img`
  border-radius: 50%;
  display: block;
  background-color: silver;
  height: 40px;
  width: 40px;
`

export default class AdminWidget extends Component {
  state = {
    dropdownOpened: false
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ dropdownOpened: !prevState.dropdownOpened }))
  }

  render() {
    const { dropdownOpened } = this.state
    const arrowStyle = dropdownOpened ? { transform: 'rotate(180deg)' } : {}
    return (
      <Fragment>
        <OutsideAlerter handleClickOutsideElement={() => this.setState({ dropdownOpened: false })}>
          <DropdownContainer>
            <ActionsDropdownBtn
              onClick={this.toggleDropdown}>
              Operations
          <i className="material-icons" style={arrowStyle}>
                arrow_drop_down
          </i>
            </ActionsDropdownBtn>
            {dropdownOpened &&
              <ActionsDropdown>
                <Link href='reset-password'>
                  <a>Change password</a>
                </Link>
                <button onClick={() => { }}>
                  Logout
            </button>
              </ActionsDropdown>
            }
          </DropdownContainer>
        </OutsideAlerter>
        <AdminAvatar src='https://png.icons8.com/dotty/2x/administrator-male.png' />
      </Fragment>
    )
  }
}
