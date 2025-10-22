import { useState } from "react";
import "./App.css"
import logoImage from "./assets/img/LogoMagicians.png";
import teamImage from "./assets/img/equipo-de-empresarios-durante-una-reunion.jpg";
import productImage from "./assets/img/enhanced_image_1-removebg-preview.png";

const MagicianGround = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>

      <div className={`sidebar ${menuVisible ? "active" : ""}`} id="sidebar">
        <button className="close-btn" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li>
            <i className="fas fa-home"></i> <a href="#hero">Home</a>
          </li>
          <li>
            <i className="fas fa-info-circle"></i>{" "}
            <a href="#about">Sobre Nosotros</a>
          </li>
          <li>
            <i className="fas fa-bullseye"></i> <a href="#objetivo">Objetivos</a>
          </li>
          <li>
            <i className="fas fa-users"></i> <a href="#team">Equipo</a>
          </li>
          <li>
            <i className="fas fa-box"></i>{" "}
            <a href="#services">Productos y/o Servicios</a>
          </li>
          <li>
            <i className="fas fa-phone"></i> <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>

      <main>
        <section id="hero" className="hero">
          <div className="hero-texto">
            <h1>Magician Ground</h1>
            <p>El futuro de la agronomía</p>
          </div>
        </section>

        <section id="about" className="quienes-somos">
          <div className="contenido-izquierda">
            <h3>¿Quiénes somos?</h3>
            <p>
              Somos una empresa dedicada al desarrollo de innovaciones
              tecnológicas enfocadas en el sector agrícola.
            </p>
          </div>
          <div className="contenido-derecha">
            <a href="#services">
              Conocer nuestro producto más reciente <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="https://github.com/MagicianGround"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más sobre quienes somos <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>

        <section id="objetivo" className="objetivo">
          <div className="objetivo-texto">
            <h2>Nuestro Objetivo</h2>
            <p>
              Nuestro objetivo es transformar la agricultura a través de
              soluciones inteligentes que optimicen los procesos productivos,
              aumenten la eficiencia en el uso de los recursos y promuevan
              prácticas sostenibles.
            </p>
            <a
              href="https://github.com/MagicianGround"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más sobre nuestro objetivo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>

        <section id="team" className="trabajo">
          <div className="trabajo-texto">
            <h2>¿Cómo Trabajamos?</h2>
            <p>
              Trabajamos en la integración de tecnologías como sensores IoT,
              inteligencia artificial, sistemas de monitoreo en tiempo real y
              análisis de datos para ofrecer herramientas que impulsen una
              agricultura más moderna, precisa y rentable.
            </p>
            <a
              href="https://github.com/MagicianGround"
              target="_blank"
              rel="noopener noreferrer"
            >
              Más sobre nuestra manera de trabajo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="trabajo-imagen">
            <img src={teamImage} alt="Equipo trabajando" />
          </div>
        </section>

        <section id="services" className="estaca">
          <div className="estaca-izquierda">
            <a href="#">
              <img src={productImage} alt="Producto" />
            </a>
          </div>
          <h3>Productos</h3>
          <div className="estaca-derecha"></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-contenedor">
          <div className="footer-form">
            <h2>Contacto</h2>
            <form>
              <input type="text" placeholder="Nombre y apellido" required />
              <input type="email" placeholder="Gmail" required />
              <textarea placeholder="Mensaje" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <div className="footer-redes">
                <a
                  href="https://www.instagram.com/proa_lafalda/?hl=es"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/proalafalda/?locale=es_LA"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://proalafalda.blogspot.com/"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <p className="footer-copy">BY MAGICIAN GROUND</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MagicianGround;
