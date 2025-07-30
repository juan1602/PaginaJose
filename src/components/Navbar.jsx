import React from "react";
import perfilImg from '../assets/Nutritrace.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src={perfilImg}
            alt="Logo"
            style={{ maxHeight: "40px", marginRight: "10px" }}
          />
          NUTRITRACE
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Nuestra empresa</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

