import Banner from './banner'
import Content from './content'
import Favorite from './favorite'
import Outlet from './outlet'
import Partner from './partner'
import Testimoni from './testimoni'
import Head from 'next/head'

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Coffee - Home</title>
      </Head>
      <Banner />
      <Content />
      <Favorite />
      <Outlet />
      <Partner />
      <Testimoni />
    </>
  )
}

export default Homepage
