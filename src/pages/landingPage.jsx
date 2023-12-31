import React from 'react'
import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import Landing from '../components/landing/landing'
import { useUser } from '../util/UserContext'

function Landingpage() {

  const {usuario,toggleUsuario} = useUser();
  return (
    <div data-theme="black">
        <Navbar  usuario={usuario} toggleUsuario={toggleUsuario}/>
        <Landing />
        <Footer />
    </div>
  )
}

export default Landingpage