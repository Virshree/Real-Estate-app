import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'

import FeaturedProject from '../components/FeaturedProject'
import PropertySale from '../components/PropertySale'
import Rentals from '../components/Rentals'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <HeroSection/>
        <FeaturedProject/>
        <PropertySale />
        <Rentals/>
        <Footer/>
    </div>
  )
}

export default Home