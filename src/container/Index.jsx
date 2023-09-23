import React from 'react';

import { Nav, Hero, Highlights, Plans, Discover, Best, FlinNews, Footer } from '../Components/container';
const Index = () => {
  return (
    <div className='bg-grey-900 mx-56'>
        <Nav />
        <Hero />
        <Highlights />
        <Plans />
        <Discover />
        <Best />
        <FlinNews />
        <Footer />
    </div>
  )
}

export default Index