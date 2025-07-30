// src/components/sections/Contact.js
import React, { useEffect } from "react";
import { personalInfo } from "../../data/personalData";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp,FaUser, FaStethoscope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container my-5" id="contact">
      <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">📞 Contacto</h2>
      <div className="card shadow-lg border-0" data-aos="fade-up">
        <div className="card-body p-4">
          <ul className="list-unstyled fs-5">
            <li className="mb-3 d-flex align-items-center contact-item">
              <FaUser className="contact-icon text-info me-3" />
              <a href={`mailto:${personalInfo.name}`} className="text-decoration-none text-dark">
                {personalInfo.name}
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center contact-item">
              <FaStethoscope className="contact-icon text-warning me-3" />
              <a href={`mailto:${personalInfo.profesion}`} className="text-decoration-none text-dark">
                {personalInfo.profesion}
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center contact-item">
              <FaEnvelope className="contact-icon text-primary me-3" />
              <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-dark">
                {personalInfo.email}
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center contact-item">
              <FaPhoneAlt className="contact-icon text-success me-3" />
              <a href={`tel:${personalInfo.phone}`} className="text-decoration-none text-dark">
                {personalInfo.phone}
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center contact-item">
              <FaMapMarkerAlt className="contact-icon text-danger me-3" />
              <span>{personalInfo.location}</span>
            </li>
            
          </ul>
        </div>
      </div>
      <a
        href="https://wa.me/573188505664?text=Hola,%20me%20interesa%20tu%20perfil."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-right d-flex align-items-center justify-content-center"
      >
        <FaWhatsapp size={30} />
      </a>
    </section>
    
  );
};

export default Contact;

