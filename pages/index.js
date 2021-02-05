import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import HomePage from '../components/HomePage'
import Page from '../components/Page'
import ForceLayout from '../components/ForceLayout'
// import P5Wrapper from 'react-p5-wrapper';
// import sketch from '../components/sketch';


function Home({ searchesMapped }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <script src="https://d3js.org/d3.v3.min.js"></script>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div>
        <div>{searchesMapped[0].title}</div>
        {/* <HomePage props={searchesMapped} /> */}
        {/* <Page props={searchesMapped} /> */}

        <ForceLayout />
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
      console.log(el)
      const search = {}
      search.title = el.title.query
      search.children = []
      el.articles 
      ? el.articles.map(el => {
        let title = {}
        title =  el.title.split(' ')[1];
        search.children.push({title})
      })
      : null
     
      // search.traffic = el.formattedTraffic
      return search
    })
  
    return { props: { searchesMapped },
    }
  } catch (err) {
    console.log(err)
  }

}

export default Home