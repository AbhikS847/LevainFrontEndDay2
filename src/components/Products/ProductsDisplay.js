import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Modal, Form
} from 'react-bootstrap';
import axios from 'axios';

const Ingredient = props => (
  <tr>
    <td>{props.ingredient.name}</td>
    <td>{props.ingredient.weight}</td>
  </tr>
);

export class ProductsDisplay extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.spinnerShow = this.spinnerShow.bind(this);
    this.spinnerClose = this.spinnerClose.bind(this);


    this.state = {
      name: '',
      ingredients: [],
      method: [],
      type: [],
      show: false
    };
  }

  // Gettting the workouts by their id
  componentDidMount() {
    axios.get(`http://localhost:5000/api/products/update/${this.props.id}`)
      .then((response) => {
        this.setState({
          name: response.data.name,
          ingredients: response.data.ingredientsArray,
          method: response.data.method,
          type: response.data.type
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  onSubmit(e) {
    e.preventDefault();

    console.log('The form has been submitted');

    const obj = {

      name: this.state.name,
      ingredients: this.state.ingredients,
      method: this.state.method,
      type: this.state.type

    };

    axios.post(`http://localhost:5000/api/products/update/${this.props.id}`, obj)
      .then(res => console.log(res.data));


    this.timer();
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

  onChangeMethod(e) {
    this.setState({
      method: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log(this.props);
  }

  spinnerShow() {
    this.setState({ appear: true });
  }

  spinnerClose() {
    this.setState({ appear: false });
  }

  timer() {
    this.spinnerShow();
    this.state.inputLinkClicked = true;
    setTimeout(() => { window.location.reload(); }, 1000);
  }


  render() {
    return (


      <div>
        {console.log(this.state)}

        <Button
          style={{
            borderColor: 'white', backgroundColor: 'white', color: 'black', minWidth: '50vh', maxWidth: '50vh', textAlign: 'left', margin: '1vh', height: '5vh'
          }}
          onClick={this.handleShow}
        >
          {this.state.name}
        </Button>


        <Modal show={this.state.show} onHide={this.handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ width: '100%' }}>

            <Form onSubmit={this.onSubmit}>

              <Form.Group>

                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.name}
                  onChange={this.onChangeName}
                  type="text"
                  placeholder="Enter day of the week"
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>Method</Form.Label>
                <div className="ui field">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Example, pour one cup flour..."
                    value={this.state.method}
                    onChange={this.onChangeMethod}
                  />
                </div>

              </Form.Group>

              <Form.Group>

                <table className="ui celled table">
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Weight(g)</th>

                    </tr>
                  </thead>
                  <tbody>
                    {this.state.ingredients.map((currentIngredient, i) => (

                      <Ingredient ingredient={currentIngredient} key={i} />
                    ))}
                  </tbody>
                </table>

              </Form.Group>

              <div>

                <Button
                  style={{
                    width: '80px',
                    borderColor: 'grey',
                    backgroundColor: 'grey',
                    color: 'white'
                  }}
                  onClick={this.handleClose}
                >
                  Cancel
                </Button>

                <Button
                  variant="primary"
                  type="submit"
                  className="float-right"
                  style={{
                    color: 'white'
                  }}
                >
                  Save
                </Button>

              </div>


            </Form>

          </Modal.Body>


        </Modal>


      </div>
    );
  }
}

export default ProductsDisplay;
