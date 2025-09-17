import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Card from '../components/Card'
import FeaturedProject from '../components/FeaturedProject'
import PropertySale from '../components/PropertySale'
import Rentals from '../components/Rentals'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <Card/>
        <FeaturedProject/>
        <PropertySale />
        <Rentals/>
        <Footer/>
    </div>
  )
}

export default Home