import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {  useNavigate } from "react-router";

function ServiceModal({ show, handleClose, service }) {
    const navi = useNavigate()
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
          {service.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{service.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
          Close
        </Button>
        <Button variant="primary" onClick={() => navi("/contact")}>
          
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
          Get Service
         
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ServiceModal;
