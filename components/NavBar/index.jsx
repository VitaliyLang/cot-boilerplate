import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { Box, Flex } from 'grid-styled'
import AdminWidget from './AdminWidget'

const TopBarContainer = styled.header`
  padding: 25px 55px 25px 25px;
  width: 100%;
  border: 2px solid black;
  background-color: #fff;
`

const Logo = styled.img`
  width: 40px;
  display: block;
`

class AppHeader extends Component {
  static propTypes = {
    toggleSideNav: PropTypes.func.isRequired
  }

  render() {
    return (
      <TopBarContainer>
        <Flex align='center'>
          <Box w={1 / 10} role='button' onClick={this.props.toggleSideNav}>
            <Logo src={'../static/images/logo.png'} />
          </Box>
          <Box w={1 / 3.5}>
            <SearchBar />
          </Box>
          <Flex
            ml='auto'
            alignItems='center'
            justifyContent='flex-end'
            w='250px'>
            <AdminWidget />
          </Flex>
        </Flex>
      </TopBarContainer>
    )
  }
}

export default AppHeader
