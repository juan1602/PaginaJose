import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/MissionVision";
import "./App.css";

import { personalInfo } from "./data/personalData"; // ✅ Import correcto
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Education />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} Jose Alfonso Avila. Todos
            los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
 
