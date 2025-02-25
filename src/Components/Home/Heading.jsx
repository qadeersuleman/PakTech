import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <Container>
        <Row className="justify-content-between align-items-center topbar">
          <Col xs="auto" className="top-info">
            <small className="me-3 text-white-50">
              <Link href="#">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2 text-secondary"
                />
              </Link>
              23 Ranking Street, New York
            </small>
            <small className="me-3 text-white-50">
              <Link href="#">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 text-secondary"
                />
              </Link>
              Email@Example.com
            </small>
          </Col>
          <Col xs="auto" id="note" className="text-secondary d-none d-xl-flex">
            <small>Note: We help you to Grow your Business</small>
          </Col>
          <Col xs="auto" className="top-link">
            <Button
              variant="light"
              className="btn-sm-square rounded-circle me-2"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
            </Button>
            <Button
              variant="light"
              className="btn-sm-square rounded-circle me-2"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-primary" />
            </Button>
            <Button
              variant="light"
              className="btn-sm-square rounded-circle me-2"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-primary" />
            </Button>
            <Button variant="light" className="btn-sm-square rounded-circle">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-primary" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
