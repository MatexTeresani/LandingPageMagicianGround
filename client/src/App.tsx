import React, { useState } from "react";
import logoImage from "assets/img/LogoMagicians.png";
import teamImage from "assets/img/equipo-de-empresarios-durante-una-reunion.jpg";
import productImage from "assets/img/enhanced_image_1-removebg-preview.png";

const MagicianGround: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src={logoImage} alt="Logo Magicians" style={styles.logo} />
        <button onClick={toggleMenu} style={styles.menuButton}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </button>
      </header>

      {/* Sidebar */}
      {menuVisible && (
        <div style={styles.sidebar}>
          <button onClick={toggleMenu} style={styles.closeButton}>
            ×
          </button>
          <ul style={styles.menuList}>
            <li>Home</li>
            <li>Sobre Nosotros</li>
            <li>Objetivos</li>
            <li>Equipo</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>
      )}

      {/* Contenido principal */}
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.title}>Sobre Nosotros</h2>
          <img src={teamImage} alt="Equipo" style={styles.sectionImage} />
          <p style={styles.text}>
            En MagicianGround trabajamos para mejorar el rendimiento de la tierra a través de
            análisis precisos y tecnología de vanguardia.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>Productos</h2>
          <img src={productImage} alt="Producto" style={styles.sectionImage} />
          <p style={styles.text}>
            Nuestro sistema analiza macronutrientes, humedad, pH, y más, brindando datos en tiempo real.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MagicianGround;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    position: "relative",
    backgroundColor: "#f4f4f4",
    color: "#333",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#003366",
    color: "white",
  },
  logo: {
    width: "150px",
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
    margin: "4px 0",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "220px",
    height: "100%",
    backgroundColor: "#002244",
    color: "white",
    padding: "20px",
    zIndex: 100,
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    position: "absolute",
    top: "10px",
    right: "15px",
    cursor: "pointer",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "18px",
  },
  main: {
    padding: "20px",
  },
  section: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "16px",
  },
  sectionImage: {
    width: "60%",
    maxWidth: "500px",
    borderRadius: "10px",
    margin: "10px auto",
    display: "block",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginTop: "12px",
  },
};
