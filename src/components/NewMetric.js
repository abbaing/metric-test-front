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
      isPosting: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ isPosting: true });

    const data = { 
      name: this.state.name, 
      value: this.state.value,
      time: new Date(),
    }
    
    fetch(process.env.REACT_APP_API_URL + '/metrics', { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{ 'Content-Type': 'application/json' } 
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      this.setState({ 
        isPosting: false,
        name: '',
        value:'',
       });
       this.props.onPostSubmit();
    });
  }

  handleNameChanged = (e) => {
    this.setState({name: e.target.value});
  }

  handleValueChanged = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    const isEnabled = this.state.name.length > 0 && this.state.value.length > 0;
    return (
      <div>
        <Modal show={this.props.isVisible} onHide={()=> this.props.onClickCloseModal()}>
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New Metric</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please, complete the following form:
                <Form.Group className="mb-3">
                  <Form.Label>Metric name</Form.Label>
                  <Form.Control name="name" value={this.state.name} onChange={this.handleNameChanged} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Metric value</Form.Label>
                  <Form.Control name="value" value={this.state.value} onChange={this.handleValueChanged} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={()=> this.props.onClickCloseModal()}>
                Close
              </Button>
              <input
                className="btn btn-primary modal-btn"
                type="submit"
                disabled={!this.state.isPosting & !isEnabled}
                value={this.state.isPosting ? "Saving..." : "Save Metric"}
              />
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
  
export default NewMetric;