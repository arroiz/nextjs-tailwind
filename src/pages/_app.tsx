import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJs Tailwind</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touchicon" href="/img/icon-512.png" />
        <link rel="manifest" href="/public/manifest.json" />
        <meta name="description" content="NextJs Tailwind" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
