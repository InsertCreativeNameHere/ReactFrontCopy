import React from 'react'
import Navbar from '../components/landing/navbar'
import Footer from '../components/landing/footer'
import FormularioLogin from '../components/form/formularioLogin'
import { useUser } from '../util/UserContext';


function LogIn() {
  const {usuario,toggleUsuario} = useUser();
  return (
    <div data-theme="black">
        <FormularioLogin  toggleUsuario={toggleUsuario}/>
        <Footer />
    </div>
  )
}

export default LogIn