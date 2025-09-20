import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'

import FeaturedProject from '../components/FeaturedProject'

import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Aboutus from '../components/Aboutus'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <HeroSection/>
        <FeaturedProject/>
         <Aboutus/>
        <Footer/>
    </div>
  )
}

export default Home