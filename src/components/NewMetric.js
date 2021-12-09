import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap';
import React from "react";
import Form from 'react-bootstrap/Form'

class NewMetric extends React.Component {

  constructor(){
    super();

    this.state = {
      name: '',
      value:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = { 
      name: this.state.name, 
      value:this.state.value,
      time:Date.now(),
    }

    fetch(process.env.REACT_APP_API_URL + '/metrics')
    .then((response) => response.json())
    .then(metrics => this.setState({metrics}))

    fetch('/api/metric', { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{ 'Content-Type': 'application/json' } 
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Modal show={this.props.isVisible} onHide={()=> this.props.onClickCloseModal()}>
            <Modal.Header closeButton>
              <Modal.Title>New Metric</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please, complete the following form:
                <Form.Group className="mb-3">
                  <Form.Label>Metric name</Form.Label>
                  <Form.Control id="name" name="name" type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Metric value</Form.Label>
                  <Form.Control id="value" name="value" type="text" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={()=> this.props.onClickCloseModal()}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    );
  }
}
  
export default NewMetric;