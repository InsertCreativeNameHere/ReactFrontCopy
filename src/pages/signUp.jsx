import React from 'react'
import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import FormularioRegistro from '../components/form/formularioRegistro'

function SignUp() {
  return (
    <div data-theme="black">
        <Navbar />
        <FormularioRegistro />
        <Footer />
    </div>
  )
}

export default SignUp