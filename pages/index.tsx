import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Airbnb Clone - By Metehan Ariman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Banner */}

    </div>
  )
}

export default Home
