import React from "react";
import Carrusel from "./carrusel";
import Historial from "./historial";

function Landing() {
  return (
    <div>
      <Carrusel />
      <Historial />
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="./img/kaguya.png" className="w-full" />
          </div>
        </div>
      </div>

      <div className="footer p-10 bg-base-200">
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
        <nav>
          <div className="card w-40 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nombre</h2>
            </div>
            <figure>
              <img src="./img/jjk2.jpg" alt="Shoes" />
            </figure>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Landing;
