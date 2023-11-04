import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar({usuario,toggleUsuario}) {


  let navigate = useNavigate(); 


  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

    useEffect(() => {
        if(usuario === 'out'){
          setTimeout(() => {
            navigate('/login')
        },3000);
        }
    },[]);

    const logOff = ()=>{
      toggleUsuario();
      setTimeout(() => {
        navigate('/login')
      },500);
    };


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <button className="btn btn-ghost" onClick={routeChange}>Crunchyroll</button>
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Explorar</summary>
                <ul className="p-2">
                  <li>
                    <a>Popular</a>
                  </li>
                  <li>
                    <a>Novedades</a>
                  </li>
                  <li>
                    <a>Alfabético</a>
                  </li>
                  <li>
                    <a>Temporada de Simulcast</a>
                  </li>
                  <li>
                    <a>Calendario de lanzamientos</a>
                  </li>
                  <li>
                    <a>Videos musicales y conciertos</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Manga</a>
            </li>
            <li>
              <a>Juegos</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Noticias</summary>
                <ul className="p-2">
                  <li>
                    <a>Todas la noticias</a>
                  </li>
                  <li>
                    <a>Anime Awards</a>
                  </li>
                  <li>
                    <a>Crunchyroll Expo</a>
                  </li>
                  <li>
                    <a>Anime Movie Night</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="butt"
              strokeLinejoin="bevel"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
              <div className="w-10 rounded-full">
                <img src="./img/fleur.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-square avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="./img/fleur.jpg" />
                    </div>
                  </label>
                  Usuario
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Favoritos
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  Crunchylistas
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Historial
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  Notificaciones
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Mi cuenta
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="butt"
                    strokeLinejoin="bevel"
                  >
                    <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
                  </svg>
                  Tarjeta regalo
                </a>
              </li>
              <li>
                <li onClick={logOff}>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="butt"
                      strokeLinejoin="bevel"
                    >
                      <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                    </svg>
                    Desconectar
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
