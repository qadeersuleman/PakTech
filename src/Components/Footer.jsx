import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid footer bg-dark wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link to="/">
                <h1 className="text-white fw-bold d-block">
                  PAK<span className="text-secondary">Tech</span>
                </h1>
              </Link>
              <p className="mt-4 text-light">
                At PakTech, we specialize in delivering cutting-edge IT
                solutions to help your business thrive in the digital age. Our
                team of experts is dedicated to providing top-notch digital
                transformation services.
              </p>

              {/* Social Media Icons */}
              <div className="d-flex hightech-link">
                <Link
                  to="#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f text-primary"></i>
                </Link>
                <Link
                  to="#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-twitter text-primary"></i>
                </Link>
                <Link
                  to="#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-instagram text-primary"></i>
                </Link>
                <Link
                  to="#"
                  className="btn-light nav-fill btn btn-square rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in text-primary"></i>
                </Link>
              </div>
            </div>

            {/* Short Links */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-secondary">Quick Links</h3>
              <div className="mt-4 d-flex flex-column short-link">
                <Link to="/about" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  About Us
                </Link>
                <Link to="/contact" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Contact Us
                </Link>
                <Link to="/services" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Our Services
                </Link>
                <Link to="/projects" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Our Projects
                </Link>
                <Link to="/blog" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Latest Blog
                </Link>
              </div>
            </div>

            {/* Help Links */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-secondary">Help Links</h3>
              <div className="mt-4 d-flex flex-column help-link">
                <Link to="/terms" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Terms of Use
                </Link>
                <Link to="/privacy" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Privacy Policy
                </Link>
                <Link to="/help" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Help
                </Link>
                <Link to="/faq" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  FAQs
                </Link>
                <Link to="/contact" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3 col-md-6">
              <h3 className="text-secondary">Contact Us</h3>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <Link
                  to="#"
                  className="pb-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                  Defence Phase-II, Karachi
                </Link>
                <Link
                  to="#"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-phone-alt text-secondary me-2"></i>
                  +92 302-3466-105
                </Link>
                <Link
                  to="#"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-envelope text-secondary me-2"></i>
                  paktech@net.com
                </Link>
              </div>
            </div>
          </div>
          <hr className="text-light mt-5 mb-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <Link to="/" className="text-secondary">
                  <i className="fas fa-copyright text-secondary me-2"></i>
                  PakTech
                </Link>
                , All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="#"
        className="btn btn-secondary btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </Link>
    </>
  );
}
