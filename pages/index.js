import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div >
      <Head>
        <title>Airbnb Clone - By Metehan Ariman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section className='relative py-16'>
          <LargeCard img='https://assets.cntraveller.in/photos/632c2f4a67d00ef33fe822d4/master/pass/Airbnb.jpg'
            title='The Greatest Outdoors' description='Wishlists curated by Airbnb.' buttonText='Get Inspired' />
        </section>
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('http://localhost:3000/api/').then((res) => res.json())
  const cardsData = await fetch('http://localhost:3000/api/cards').then((res) => res.json())
  return {
    props: { exploreData, cardsData }
  }
}
