import React from 'react'
import { initGlobalStyles } from 'cot-experience'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

initGlobalStyles()

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>COT Operations Platform</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            async
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            async
            rel="stylesheet"
          />

          <link href="/apps/apply/static/styles/main.css" rel="stylesheet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="viewport" content="width=device-width" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
