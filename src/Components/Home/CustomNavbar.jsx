import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faCommentDots,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <div className="container-fluid bg-primary fixed-top ">
        <Container className="bg-primary">
          <Navbar expand="lg" variant="dark" className="">
            <Image
              src="/3.png"
              width={150}
              height={150}
              style={{ marginBlock: -65 }}
            />
            <Navbar.Toggle aria-controls="navbarCollapse" className="me-0" />
            <Navbar.Collapse
              id="navbarCollapse"
              className="bg-transparent"
              style={{ paddingLeft: 20 }}
            >
              <Nav className="ms-auto mx-xl-auto py-0">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/projects"
                  className="nav-link"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <div className="d-none d-xl-flex align-items-center">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4"
              >
                <NavLink
                  to=""
                  className="position-relative animated tada infinite"
                >
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-white fa-2x"
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}
                  >
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="text-secondary"
                    />
                  </div>
                </NavLink>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: + 92302-3466105</span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4">
                <NavLink to="#">
                  <FontAwesomeIcon icon={faSearch} className="text-secondary" />
                </NavLink>
              </div>
            </div>
          </Navbar>
        </Container>
      </div>
      <div className="container-fluid" style={{ marginTop: 80 }}></div>
    </>
  );
};

export default CustomNavbar;
