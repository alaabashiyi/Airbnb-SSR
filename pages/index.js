import Head from 'next/head'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import SmallCardsContainer from '../components/smallcardscontainer/SmallCardsContainer'
import MdCardsContainer from '../components/mdcardscontainer/MdCardsContainer'
import LgCard from '../components/lgcard/LgCard'
import Footer from '../components/footer/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <SmallCardsContainer data={exploreData} />
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <MdCardsContainer data={cardsData} />
        </section>

        <section className="relative py-16 cursor-pointer">
          <LgCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired" />
        </section>
      </main>
      <Footer />
    </div>
  )
}


export const getStaticProps = async () => {
  try {
    const data = await fetch('https://links.papareact.com/pyp');
    const exploreData = await (await data.json());

    const data2 = await fetch('https://links.papareact.com/zp1');
    const cardsData = await (await data2.json());

    return {
      props: {
        exploreData,
        cardsData
      }
    }
  } catch (e) {
    console.error(e);

    return {
      props: {
        exploreData: null
      }
    }
  }

};