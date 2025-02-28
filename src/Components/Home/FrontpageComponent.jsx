import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
// import "./FrontpageComponent.css"; // Ensure to create a corresponding CSS file for custom styles

const FrontpageComponent = () => {
  return (
    <div className="container-fluid px-0" style={{ marginTop: -25 }}>
      <Carousel id="carouselId" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="img/carousel-1.jpg"
            alt="Innovative IT Solutions"
          />
          <Carousel.Caption>
            <Container className="carousel-content">
              <h6 className="text-secondary h4 animated fadeInUp">
                Leading IT Solutions Provider
              </h6>
              <h1
                className="text-white display-1 mb-4 animated fadeInRight"
                style={{ fontSize: 60 }}
              >
                Empowering Businesses with Advanced Technology
              </h1>
              <p className="mb-4 text-white fs-5 animated fadeInDown">
                Our expert team delivers cutting-edge software development, IT
                consulting, and digital transformation services to drive your
                business forward.
              </p>
              <div>
                <Button className="me-2 px-4 py-sm-3 px-sm-5 rounded-pill btn-primary animated fadeInLeft">
                  Learn More
                </Button>
                <Button className="me-2 px-4 py-sm-3 px-sm-5 rounded-pill btn-primary animated fadeInRight">
                  Get in Touch
                </Button>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="img/carousel-2.jpg"
            alt="Digital Transformation"
          />
          <Carousel.Caption>
            <Container className="carousel-content">
              <h6 className="text-secondary h4 animated fadeInUp">
                Comprehensive IT Services
              </h6>
              <h1
                className="text-white display-1 animated fadeInLeft"
                style={{ fontSize: 60 }}
              >
                Transforming Your Vision into Reality
              </h1>
              <p className="mb-4 text-white fs-5 animated fadeInDown">
                We specialize in custom software development, cloud solutions,
                and IT infrastructure management to help your business thrive in
                the digital age.
              </p>
              <div>
                <Button className="me-2 px-4 py-sm-3 px-sm-5 rounded-pill btn-primary animated fadeInLeft">
                  Discover More
                </Button>
                <Button className="me-2 px-4 py-sm-3 px-sm-5 rounded-pill btn-primary animated fadeInRight">
                  Contact Us
                </Button>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FrontpageComponent;
