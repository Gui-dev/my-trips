import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon-512.png"/>
        <link rel="apple-touch-icon" href="/images/icon-512.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#06092B"/>
        <title>React (NextJS) - Boilerplate</title>
        <meta name="description" content="A simple project starter to work with Typescript, React, NextJS and Styled Components"/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
