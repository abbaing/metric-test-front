import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";

function NewMetric(props) {
    return (
      <div>
        <Modal show={props.isVisible} onHide={()=> props.onClickCloseModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> props.onClickCloseModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> props.onClickCloseModal()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default NewMetric;