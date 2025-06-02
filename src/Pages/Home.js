import React from 'react'
import AgricultureTypes from '../Components/AgricultureTypes'
import Banner from '../Components/Banner'
import GrowingProducts from '../Components/GrowingProducts'
import NewsAndArticles from '../Components/NewsAndArticles'
import OurProjects from '../Components/OurProjects'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      {/*<Sponsors />*/}
      <AgricultureTypes />
      <Testimonials />
      {/*<OurProjects />*/}
      <GrowingProducts />
      <NewsAndArticles />
    </div>
  )
}

export default Home
