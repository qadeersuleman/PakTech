import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Abdul Qadeer",
    designation: "App Developer",
    img: "img/profile.png",
  },
  {
    id: 2,
    name: "Sajjad Hussain",
    designation: "Web Developer",
    img: "img/team-2.jpg",
  },
  {
    id: 3,
    name: "Ayesha Omar",
    designation: "Ui/Ux Designer",
    img: "img/team-3.jpg",
  },
  {
    id: 4,
    name: "Abdul Haq",
    designation: "AI Developer",
    img: "img/team-4.jpg",
  },
];

export default function Team() {
  return (
    <Container fluid className="py-5 mb-5 team">
      <Container>
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "600px" }}>
          <h5 className="text-primary">Our Team</h5>
          <h1>Meet our expert Team</h1>
        </div>
        <Row className="g-4 justify-content-center">
          {teamMembers.map((member) => (
            <Col key={member.id} md={6} lg={3}>
              <Card className="text-center team-item rounded border-0 shadow-sm">
                <div
                  className="team-img rounded-circle overflow-hidden mx-auto mt-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <Card.Img
                    variant="top"
                    src={member.img}
                    className="img-fluid w-100 rounded-circle"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.designation}</Card.Text>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="secondary"
                      className="rounded-circle btn-square"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Button>
                    <Button
                      variant="secondary"
                      className="rounded-circle btn-square"
                    >
                      <i class="fab fa-twitter"></i>
                    </Button>
                    <Button
                      variant="secondary"
                      className="rounded-circle btn-square"
                    >
                      <i class="fab fa-instagram"></i>
                    </Button>
                    <Button
                      variant="secondary"
                      className="rounded-circle btn-square"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
