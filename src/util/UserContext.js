import React, { useContext, useState } from "react"
import { createContext } from "react"

const UsuarioContext = createContext();

export const UserProvider = ({children}) =>{
    const [usuario,setUsuario] = useState(localStorage.getItem('sesion') || 'out');
    const toggleUsuario = () =>{
        const tempUser = usuario === 'out' ? 'in' : 'out'
        setUsuario(tempUser);
        localStorage.setItem('sesion',tempUser)
    }

    return(
        <UsuarioContext.Provider value={{usuario,toggleUsuario}}>
            {children}
        </UsuarioContext.Provider>
        );

}

export const useUser = () =>{
    return useContext(UsuarioContext);
}