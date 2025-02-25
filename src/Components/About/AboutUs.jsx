import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutUs(props) {
  return (
    <section
      className="container-fluid pb-5 mb-5 mt-3"
      style={{ backgroundColor: "white" }}
    >
      <div className="container pt-5">
        <div className="row g-5">
          <motion.div
            className="col-lg-5 col-md-6 col-sm-12"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-100 position-relative">
              <img
                src="img/about-1.jpg"
                className="img-fluid w-75 rounded"
                alt="PakTech Office"
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute w-75"
                style={{ top: "25%", left: "25%" }}
              >
                <img
                  src="img/about-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="PakTech Team"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-7 col-md-6 col-sm-12"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-primary">About PakTech</h5>
            <h1 className="mb-4">
              About PakTech and Our Innovative IT Solutions
            </h1>
            <p>
              Welcome to PakTech, a leading software house specializing in
              cutting-edge IT solutions. Our team of experts is dedicated to
              delivering top-notch software development, IT consulting, and
              digital transformation services to help your business thrive in
              the digital age.
            </p>
            <p className="mb-4">
              At PakTech, we pride ourselves on our ability to provide
              customized solutions that meet the unique needs of each client.
              Our services include custom software development, cloud solutions,
              and IT infrastructure management. We are committed to driving your
              business forward with innovative technology and exceptional
              service.
            </p>
            <Link
              to="/services"
              className="btn btn-secondary rounded-pill px-5 py-3 text-white"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
