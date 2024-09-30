import React from 'react'
import Navbar from './componants/Navbar'
import HeroSection from './componants/HeroSection'
import FeatureSection from './componants/FeatureSection'
import Workflow from './componants/Workflow'
import Pricing from './componants/Pricing'
import Footer from './componants/Footer'
import Testimonials from './componants/Testimonials'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App