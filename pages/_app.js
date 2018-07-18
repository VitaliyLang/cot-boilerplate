/**
 * This file is run before every page both server and client side
 * You can use it to do global application logic like login/logout
 * and render every page with the same layout
 */

import 'isomorphic-unfetch'
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import { initStore } from '../store'
import { createStore } from "redux";
import { Provider } from "react-redux";

export default withRedux(initStore, { debug: false })(
  class MyApp extends App {
    constructor(props) {
      super(props)
      this.state = { isLogin: false }
    }

    static async getInitialProps({ Component, /* router ,*/ ctx }) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      }
    }

    async componentDidMount() { }

    handleLoginClicked = () => {
      this.props.store.dispatch(/* showModal('login') */) //show modal in login view
    };

    handleLogoutClicked = () => {
      this.props.store.dispatch(/* doLogout() */)
    };

    render() {
      const { Component, pageProps, store } = this.props

      return (
        <Container>
          <Provider store={store}>
            <Layout isLogged={this.state.isLogin}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Container>
      )
    }
  }
)
