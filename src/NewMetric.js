import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap';
import React from "react";
import Form from 'react-bootstrap/Form'

function NewMetric(props) {
    return (
      <div>
        <Form>
          <Modal show={props.isVisible} onHide={()=> props.onClickCloseModal()}>
            <Modal.Header closeButton>
              <Modal.Title>New Metric</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please, complete the following form:
                <Form.Group className="mb-3">
                  <Form.Label>Metric name</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Metric value</Form.Label>
                  <Form.Control />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={()=> props.onClickCloseModal()}>
                Close
              </Button>
              <Button variant="primary" onClick={()=> props.onClickCloseModal()} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    );
  }
  
export default NewMetric;