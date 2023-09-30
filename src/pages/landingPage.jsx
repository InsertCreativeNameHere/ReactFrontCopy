import React from 'react'
import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import Landing from '../components/landing/landing'

function Landingpage() {
  return (
    <div data-theme="black">
        <Navbar />
        <Landing />
        <Footer />
    </div>
  )
}

export default Landingpage