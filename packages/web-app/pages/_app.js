import React from 'react'
import App from 'next/app'

import { applyPolyfills, defineCustomElements } from 'ez-components/loader';

export default class MyApp extends App {
  componentDidMount() {
    applyPolyfills().then(() => {
      defineCustomElements(window)
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
