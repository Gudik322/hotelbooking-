import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOfferse from '../components/ExclusiveOfferse'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
       <Hero />
       <FeaturedDestination />
       <ExclusiveOfferse />
       <Testimonial />
       <NewsLetter />
    </>
  )
}

export default Home