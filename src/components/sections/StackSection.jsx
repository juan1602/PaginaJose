import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt,
  FaGithub, FaTerminal, FaSass
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiPostgresql,
  SiVuedotjs, SiTypescript, SiRedux
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const stack = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-warning" /> },
    { name: "React", icon: <FaReact className="text-info" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-success" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-primary" /> },
    { name: "SASS", icon: <FaSass className="text-pink" /> },
    { name: "Redux", icon: <SiRedux className="text-purple" /> }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
    { name: "Python", icon: <FaPython className="text-primary" /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-success" /> },
    { name: "MySQL", icon: <SiMysql className="text-primary" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-info" /> }
  ],
  Aprendiendo: [
    { name: "Docker", icon: <FaDocker className="text-primary" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-info" /> }
  ],
  Herramientas: [
    { name: "Git", icon: <FaGitAlt className="text-danger" /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VSCode", icon: <DiVisualstudio className="text-info" /> },
    { name: "Terminal", icon: <FaTerminal /> }
  ]
};

const StackSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light" id="stack">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">💻 Stack Tecnológico</h2>
        <div className="row g-4 justify-content-center">
          {Object.entries(stack).map(([category, items]) => (
            <div
              key={category}
              className="col-md-6 col-lg-4 stack-card p-4 shadow-sm border"
              data-aos="fade-up"
            >
              <h3 className="text-center text-primary fw-bold mb-4">
                {category}
              </h3>
              <div className="row g-3">
                {items.map((tech, index) => (
                  <div
                    key={index}
                    className="col-6 d-flex align-items-center stack-item"
                  >
                    <div className="me-2 fs-4">{tech.icon}</div>
                    <span className="fw-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;

