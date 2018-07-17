import { Paper, SideNav } from 'cot-experience'
import { Box, Flex } from 'grid-styled'
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import SearchBar from '../components/SearchBar'
import PropTypes from 'prop-types'

const Header = styled.header`
  /* padding: 2rem; */
  /* border: 1px solid red; */
  /* position: fixed; */
  z-index: 1;
  /* width: 100%; */
`

const Logo = styled.img`
  width: 64px;
  display: inline-block;
`

const defaultTheme = {
  colorPrimary: '#27B161',
  colorDarkGrey: '#A4AAB3',
  colorShadow: '#000000',
  colorLightBlack: 'rgba(6, 31, 51, 0.7)',
  colorBlack: 'rgba(6, 31, 51, 1)',
  colorPrimaryEmphasis: '#148443',
  colorDanger: '#FF7183',
  colorSuccess: '#27B161',
  breakpoints: [32, 48, 64]
}

class Layout extends Component {
  handleOpenSideNav = () => {
    this.sideNavRef.toggle()
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <main>
          <SideNav ref={el => (this.sideNavRef = el)} iconsOnly width={74} />
          {this.props.isLogged
            ? <Header >
              <Paper>
                <Flex align='center' justify='space-between'>
                  <Box w={64}>
                    <Logo src={''} />
                  </Box>
                  <Box w={1 / 3}>
                    <SearchBar />
                  </Box>
                  <Box>Avatar here</Box>
                  <button type='button' onClick={this.handleOpenSideNav}>
                    Open Menu
                  </button>
                </Flex>
              </Paper>
            </Header>
            : ''}
          <Flex>
            <Box>{this.props.children}</Box>
          </Flex>
        </main>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
}

export default Layout
