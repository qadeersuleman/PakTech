import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const styles = {
  textColor: {
    color: "wheat",
  },
};

const FrontPage = () => {
  return (
    <section id="home" style={{ textAlign: "center", padding: "50px 0" }}>
      <Container style={{ marginTop: -50 }}>
        <Row>
          <Col md={12} sm={12}>
            <h3 style={styles.textColor}>
              WEB DESIGN / WEB DEVELOPMENT / SOCIAL MEDIA
            </h3>
            <h1 style={styles.textColor}>DIGITAL TEAM</h1>
            <hr style={{ width: "50%", margin: "20px auto" }} />
            <Button
              href="#work"
              className="smoothScroll"
              variant="danger"
              style={{ marginRight: "10px" }}
            >
              What we do
            </Button>
            <Button
              href="#contact"
              className="smoothScroll"
              variant="outline-secondary"
            >
              Talk to us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FrontPage;
