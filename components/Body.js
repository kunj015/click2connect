import React from 'react'
import Gallery from './Gallery'
import ContactForm from './ContactForm'
import BlogSection from './BlogSection'
import Landing from './Landing'
import ServicesSection from './ServicesSection'
import PhotographerSection from './PhotographerSection'

const Body = () => {
  return (
    <>
        <Landing/>
        <PhotographerSection/>
        <ServicesSection/>
        <Gallery/>
        <BlogSection/>
        <ContactForm/>
    </>
  )
}

export default Body