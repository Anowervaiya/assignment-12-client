import React from 'react'
import Banner from '../Banner/Banner'
import Testimonials from '../Testimonials/Testimonials'
import ContactUs from '../ContactUs/ContactUs'
import TopScholarship from '../TopScholarship/TopScholarship'

function HomeContainer() {
  return (
    <div>
     
      <Banner></Banner>
      <TopScholarship/>
      <Testimonials />
      <ContactUs/>
    </div>
  )
}

export default HomeContainer