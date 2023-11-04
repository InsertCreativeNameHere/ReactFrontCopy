import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormularioLogin({ toggleUsuario }) {
  let navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwdRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    passwd: "",
  });

  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "El correo electonico es requerido";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      validationErrors.email = "Correo electronico no valido";
      usernameRef.current.focus();
    }

    if (!formData.passwd.trim()) {
      validationErrors.passwd = "No olvides colocar tu contraseña";
      passwdRef.current.focus();
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      toggleUsuario();
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="min-w-screen min-h-screen bg-gray-950 flex items-center justify-center px-5 py-5">
          <div className="bg-gray-900 text-gray-50 rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 bg-orange-600 py-10 px-10">
                <img src="./img/hime.png" className="w-full" />
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-50">Accede a tu cuenta</h1>
                  <p>¡Que gusto verte de nuevo accede a tu cuenta para disfrutar de todo nuestro contenido!</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold px-1"
                      >
                        Correo electronico:
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-orange-500"
                          placeholder="johnsmith@example.com"
                          onChange={handleChange}
                          name="email"
                          ref={usernameRef}
                        />
                      </div>
                      {errors.email && <span>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label
                        htmlFor="passwd"
                        className="text-xs font-semibold px-1"
                      >
                        Contraseña:
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-orange-500"
                          placeholder="************"
                          onChange={handleChange}
                          name="passwd"
                          ref={passwdRef}
                        />
                      </div>
                      {errors.passwd && <span>{errors.passwd}</span>}
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        className="block w-full max-w-xs mx-auto bg-orange-500 hover:bg-orange-700 focus:bg-orange-700 text-black rounded-lg px-3 py-3 font-semibold"
                      >
                        Iniciar sesion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormularioLogin;
