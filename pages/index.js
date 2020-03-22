import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import HomePage from '../components/HomePage'

function Home({ searchesMapped }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div>
        <HomePage props={searchesMapped} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3001' : 'https://popular.now.sh';
    const res = await fetch(`${server}/api/trends`)
    const json = await res.json()
    const searches = json.default.trendingSearchesDays[0].trendingSearches
    const searchesMapped = searches.map((el) => {
      const search = {}
      search.title = el.title.query
      search.relatedQueries = el.relatedQueries ? el.relatedQueries.map(el => el.query) : []
      search.traffic = el.formattedTraffic
      return search
    })
  
    return { props: { searchesMapped },
    }
  } catch (err) {
    console.log(err)
  }

}

export default Home