import { useState } from "react";
import './Navbar.css'
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        
        {/* LOGO */}
        <div className="logo">Serenity</div>

        {/* MENU DESKTOP */}
        <nav className={`menu ${open ? "menu-open" : ""}`}>
          <Link to="about" smooth={true} duration={500} >Sobre mí</Link>
          <Link to="services"smooth={true} duration={500}>Servicios</Link>
          <Link to="turnos" smooth={true} duration={500}>Contacto</Link>
          <a href="TU LINK A WHATSAPP"  className="btn-primary">Agendar sesión</a>
        </nav>

        {/* HAMBURGUESA MOBILE  - MENÚ PARA MOVILES*/}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className={open ? "bar bar1-close" : "bar"}></div>
          <div className={open ? "bar bar2-close" : "bar"}></div>
          <div className={open ? "bar bar3-close" : "bar"}></div>
        </div>
      </div>
    </header>
  );
}
