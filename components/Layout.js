import { Flex } from 'grid-styled'
import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import AppHeader from './NavBar'
import { withRouter } from 'next/router'

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
const AuthWrapper = styled(Flex)`
  flex-grow: 1;
  margin: 150px auto;
  flex-basis: 1;
  max-width: 550px;
  display: flex;
  justify-content: space-around;
`
class Layout extends Component {
  // toggleSideNav = () => {
  //   this.sideNavRef.open()
  // }

  render() {
    const { pathname } = this.props.router
    const centeredLayoutRoutes = ['/login', '/forgot-password', '/reset-password']
    const centeredLayout = !!~centeredLayoutRoutes.indexOf(pathname)
    return (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          {!centeredLayout ? (
            <Fragment>
              <AppHeader />
              {/* <SideNav ref={el => (this.sideNavRef = el)} /> */}
              <main>
                <Flex pl={205} pr={55}>
                  {this.props.children}
                </Flex>
              </main>
            </Fragment>
          ) : (
              <main>
                <AuthWrapper m='100px auto' justify='stretch'>
                  {this.props.children}
                </AuthWrapper>
              </main>
            )}
        </Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export default withRouter(Layout)
