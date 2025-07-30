import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { missionVision } from "../../data/personalData";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container my-5" id="mission-vision">
      <h2 className="text-center mb-5 fw-bold">Nuestra Empresa</h2>
      <div className="row gy-4">
        {missionVision.map((_item, index) => (
          <article
            key={index}
            className="col-12 col-md-6"
            data-aos="fade-up"
          >
            <div className="card h-100 shadow-sm border">
              <div className="card-body">
                <h3 className="card-title fw-bold text-primary">{_item.title}</h3>
                <p className="card-text text-muted">{_item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
