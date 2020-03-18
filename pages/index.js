import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import HomePage from '../components/HomePage'
// import '../components/HomePage.css'
// import particles from 'particles.js'

function Home({ searchesMapped }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <HomePage props={searchesMapped} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'popular.now.sh' : 'popular.now.sh';

  const res = await fetch(`${server}/api/trends`)
  console.log("res", res)
  const json = await res.json()
  const searches = json.default.trendingSearchesDays[0].trendingSearches
  const searchesMapped = searches.map((el) => {
    const search = {}
    search.title = el.title.query
    search.traffic = el.formattedTraffic
    return search
  })

  return { props: { searchesMapped },
  }
}

export default Home