import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200">
        <nav>
          <header className="footer-title">Navegación</header>
          <a className="link link-hover">Explorar lo más popular</a>
          <a className="link link-hover">Explorar los Simulcasts</a>
          <a className="link link-hover">Explorar Manga</a>
          <a className="link link-hover">Calendario de lanzamientos</a>
          <a className="link link-hover">Noticias</a>
          <a className="link link-hover">Juegos</a>
        </nav>
        <nav>
          <header className="footer-title">Conecta con nosotros</header>
          <a className="link link-hover">Youtube</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Tiktok</a>
        </nav>
        <nav>
          <header className="footer-title">Crunchyroll</header>
          <a className="link link-hover">Acerca</a>
          <a className="link link-hover">Ayuda/FAQ</a>
          <a className="link link-hover">Términos de Uso</a>
          <a className="link link-hover">Términos de Uso</a>
          <a className="link link-hover">Política de Privacidad</a>
          <a className="link link-hover">
            Herramienta de aceptación de cookies
          </a>
          <a className="link link-hover">Contacto de prensa</a>
          <a className="link link-hover">Hazte con nuestras aplicaciones</a>
          <a className="link link-hover">Canjear Tarjeta Regalo</a>
          <a className="link link-hover">Empleo</a>
        </nav>
        <nav>
          <header className="footer-title">Cuenta</header>
          <a className="link link-hover">Favoritos</a>
          <a className="link link-hover">Crunchylistas</a>
          <a className="link link-hover">Historial</a>
          <a className="link link-hover">Mi Cuenta</a>
          <a className="link link-hover">Desconectar</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>SONY PICTURES | Crunchyroll, LLC</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="btn m-1">
              Español
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Español</a>
              </li>
              <li>
                <a>English (US)</a>
              </li>
              <li>
                <a>Italiano</a>
              </li>
              <li>
                <a>Portuges</a>
              </li>
              <li>
                <a>Deutsch</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
