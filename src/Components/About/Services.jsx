import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Improve website visibility on search engines to drive organic traffic and increase rankings. Our team of experts uses the latest techniques and tools to ensure your website ranks high on search engine results pages. We provide comprehensive SEO services, including keyword research, on-page optimization, link building, and content creation. Our goal is to help you attract more visitors, generate leads, and grow your business.",
    icon: <i className="fas fa-chart-line fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "Web App Development",
    description:
      "Build high-performance, scalable web applications tailored to business needs. Our experienced developers use the latest technologies and frameworks to create web applications that are fast, secure, and user-friendly. We work closely with you to understand your requirements and deliver a solution that meets your needs. Whether you need a simple website or a complex web application, we have the expertise to deliver.",
    icon: <i className="fas fa-laptop-code fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "UI/UX Design",
    description:
      "Create visually appealing and user-friendly interfaces for enhanced user experience. Our design team focuses on creating intuitive and engaging interfaces that provide a seamless user experience. We use a user-centered design approach to ensure that our designs meet the needs and expectations of your users. From wireframes and prototypes to final designs, we work with you every step of the way to create a design that stands out.",
    icon: <i className="fas fa-paint-brush fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "AI Development",
    description:
      "Implement AI-driven solutions to automate tasks and improve decision-making. Our AI experts use machine learning, natural language processing, and other AI technologies to create solutions that can analyze data, recognize patterns, and make predictions. We help you leverage AI to automate repetitive tasks, gain insights from data, and make better decisions. Whether you need a chatbot, a recommendation system, or a predictive analytics solution, we can help.",
    icon: <i className="fas fa-robot fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "WordPress Development",
    description:
      "Develop custom WordPress themes and plugins to enhance website functionality. Our WordPress developers have extensive experience in creating custom themes and plugins that meet your specific requirements. We follow best practices to ensure that our themes and plugins are secure, fast, and easy to use. Whether you need a simple blog or a complex e-commerce site, we can create a WordPress solution that meets your needs.",
    icon: <i className="fab fa-wordpress fa-7x mb-4 text-primary"></i>,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Design and develop e-commerce platforms with seamless shopping experiences. Our e-commerce experts create online stores that are easy to navigate, secure, and optimized for conversions. We use the latest technologies and best practices to ensure that your e-commerce site provides a great shopping experience for your customers. From product listings and shopping carts to payment gateways and order management, we provide end-to-end e-commerce solutions.",
    icon: <i className="fas fa-shopping-cart fa-7x mb-4 text-primary"></i>,
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const truncateDescription = (description) => {
    const lines = description.split(". ");
    return lines.slice(0, 1.5).join(". ") + "...";
  };

  return (
    <div
      className="container-fluid services pb-5"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container pt-4">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Services</h5>
          <h1>Services Built Specifically For Your Business</h1>
        </div>
        <motion.div
          className="row g-5 services-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={index}
              variants={itemVariants}
            >
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    {item.icon}
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="mb-4">
                      {truncateDescription(item.description)}
                    </p>
                    <button
                      onClick={() => handleShowModal(item)}
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ServiceModal
        show={showModal}
        handleClose={handleCloseModal}
        service={selectedService}
      />
    </div>
  );
}

export default Services;
