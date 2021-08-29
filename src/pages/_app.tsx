import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgressbar from 'nextjs-progressbar'

import { GlobalStyle } from 'styles/global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon-512.png"/>
        <link rel="apple-touch-icon" href="/images/icon-512.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="description" content="A simple project to show my favorites spots in the world"/>
        <meta name="theme-color" content="#06092B"/>

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin="true"/>

        <title>My Trips</title>
      </Head>
      <GlobalStyle />
      <NextNProgressbar
        color="#FFCD00"
        startPosition={ 0.3 }
        stopDelayMs={ 200 }
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
