import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from 'components/navbar/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <title>Mon jolie film</title>
    </Head>
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
    <footer>
      <p>IMDB</p>
    </footer>
    </>
  )
}

export default App
