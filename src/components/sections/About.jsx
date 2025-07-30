import React from "react";
import perfilImg from '../../assets/Nutritrace.jpg';


const About = () => {
  return (
    <section className="container my-5" id="about">
      <h2 className="mb-4"> Nutritrace</h2>
      <div className="row">
        <div className="col-md-8">
          <p>
            NutriTrace es una empresa dedicada a ofrecer soluciones nutricionales para el sector agropecuario, mediante la producción de sales mineralizadas de alta calidad. Su enfoque combina bienestar animal, trazabilidad y sostenibilidad, con el objetivo de mejorar la productividad en especies como bovinos, porcinos, aves y más. Aspira a ser líder nacional en nutrición animal, contribuyendo al desarrollo rural.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={perfilImg}
            style={{ maxWidth: "200px" }}
          /> 
        </div>
      </div>
    </section>
  );
};

export default About;
