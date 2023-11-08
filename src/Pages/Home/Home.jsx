import React from 'react'
import "./style.scss";
import Herobanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';

const Home = () => {
  return (
    <div className='homepage'>
      <Herobanner />
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
