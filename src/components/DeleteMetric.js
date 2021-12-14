import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap';
import React from "react";
import Form from 'react-bootstrap/Form'

class DeleteMetric extends React.Component {

  deleteMetric = () => {
    
    fetch(process.env.REACT_APP_API_URL + 'metrics/' + this.props.metric?.id, { 
      method: 'DELETE'
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      this.props.onYesSelected();
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.props.isVisible} onHide={()=> this.props.onClickCloseModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to remove the metric?
            <Form.Group className="mb-3">
              <Form.Label>Metric name</Form.Label>
              <Form.Control name="name" value={this.props.metric?.name} readOnly="readonly" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Metric value</Form.Label>
              <Form.Control name="value" value={this.props.metric?.value} readOnly="readonly" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="default" className='btn btn-primary' onClick={()=> this.deleteMetric()}>Yes</Button>
            <Button variant="default" onClick={()=> this.props.onNoSelected()}>No</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
  
export default DeleteMetric;