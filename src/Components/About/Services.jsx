import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Improve website visibility on search engines to drive organic traffic and increase rankings.",
    icon: <i className="fas fa-chart-line fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "Web App Development",
    description:
      "Build high-performance, scalable web applications tailored to business needs.",
    icon: <i className="fas fa-laptop-code fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "UI/UX Design",
    description:
      "Create visually appealing and user-friendly interfaces for enhanced user experience.",
    icon: <i className="fas fa-paint-brush fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "AI Development",
    description:
      "Implement AI-driven solutions to automate tasks and improve decision-making.",
    icon: <i className="fas fa-robot fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "WordPress Development",
    description:
      "Develop custom WordPress themes and plugins to enhance website functionality.",
    icon: <i className="fab fa-wordpress fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Design and develop e-commerce platforms with seamless shopping experiences.",
    icon: <i className="fas fa-shopping-cart fa-7x mb-4 text-primary"></i>,
  },
];

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid services pb-5" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container pt-4">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "600px" }}>
          <h5 className="text-primary">Our Services</h5>
          <h1>Services Built Specifically For Your Business</h1>
        </div>
        <div className="row g-5 services-inner">
          {services.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="services-item bg-light p-4 text-center">
                <div className="services-content">
                  <div className="services-content-icon">
                    {item.icon}
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="mb-4">{item.description}</p>
                    <button
                      onClick={() => handleShowModal(item)}
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal show={showModal} handleClose={handleCloseModal} service={selectedService} />
    </div>
  );
}

export default Services;
