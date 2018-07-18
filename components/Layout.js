import { SideNav } from 'cot-experience'
import { Box, Flex } from 'grid-styled'
import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import AppHeader from './NavBar'

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
  toggleSideNav = () => {
    this.sideNavRef.toggle()
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          {this.props.isLogged && (
            <Fragment>
              <AppHeader toggleSideNav={this.toggleSideNav} />
              <SideNav ref={el => (this.sideNavRef = el)} />
            </Fragment>
          )}
          <main>
            <Flex>
              <Box>{this.props.children}</Box>
            </Flex>
          </main>
        </Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
}

export default Layout
