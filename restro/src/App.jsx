import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'
import Testimonial from './sections/Testimonial'
import FAQs from './sections/FAQs'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Stats/>
      <Dishes/>
      <Features/>
      <BookingProcess/>
      <Timing/>
      <Testimonial/>
      <FAQs/>
    </>
  )
}

export default App


