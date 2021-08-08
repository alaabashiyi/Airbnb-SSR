import Head from 'next/head'
import Banner from '../components/header/Banner'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  )
}
