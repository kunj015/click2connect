import React from 'react'
import Gallery from './Gallery'
import ContactForm from './ContactForm'
import BlogSection from './BlogSection'
import Landing from './Landing'
import ServicesSection from './ServicesSection'
import PhotographerSection from './PhotographerSection'
import Link from 'next/link'

const Body = () => {
  return (
    <>
        <Landing/>
        <PhotographerSection/>
        <ServicesSection/>
        <Link href={'/service'}>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find More</button>
        </Link>
        <Gallery/>
        <BlogSection/>
        <ContactForm/>
    </>
  )
}

export default Body