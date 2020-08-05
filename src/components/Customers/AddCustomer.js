import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Button, Row, Form, Col} from 'react-bootstrap';

class AddCustomer extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
        businessName:"",
        contactName:"",
        Phone:"",
        Email:"",
        deliveryAddress:"",
        keyedEntry:false,
        earliestArrival:"",
        latestArrival:"",
        deliveryContactName:"",
        deliveryContactPhone:"",
        deliveryNotes:""
      
    }

    this.onBusinessName = this.onBusinessName.bind(this);
    this.onContactName = this.onContactName.bind(this);
    this.onPhone = this.onPhone.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onDeliveryAddress = this.onDeliveryAddress.bind(this);
    this.onKeyedEntry = this.onKeyedEntry.bind(this);
    this.onEarliestArrival = this.onEarliestArrival.bind(this);
    this.onLatestArrival = this.onLatestArrival.bind(this);
    this.onDeliveryContactName = this.onDeliveryContactName.bind(this);
    this.onDeliveryContactPhone = this.onDeliveryContactPhone.bind(this);
    this.onDeliveryNotes = this.onDeliveryNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onBusinessName = (event) =>{
    this.setState({
        businessName:event.target.value
    })
  }
  onContactName = (event) =>{
    this.setState({
        contactName:event.target.value
    })
  }
  onPhone = (event) =>{
    this.setState({
        Phone:event.target.value
    })
  }
  onEmail = (event) =>{
    this.setState({
      Email:event.target.value
    })
  }

  onDeliveryAddress = (event) =>{
    this.setState({
        deliveryAddress:event.target.value
    })
  }

  onKeyedEntry = (event) =>{
    if(this.state.keyedEntry === false)
    {    this.setState({
      keyedEntry:true
  })}
  else if(this.state.keyedEntry === true){
    this.setState({
      keyedEntry:false
    })
  }
  }

  onEarliestArrival = (event) =>{
    this.setState({
        earliestArrival:event.target.value
    })
  }

  onLatestArrival = (event) =>{
    this.setState({
        latestArrival:event.target.value
    })
  }

  onDeliveryContactName = (event) =>{
    this.setState({
        deliveryContactName:event.target.value
    })
  }

  onDeliveryContactPhone = (event) =>{
    this.setState({
        deliveryContactPhone:event.target.value
    })
  }

  onDeliveryNotes = (event) =>{
    this.setState({
        deliveryNotes:event.target.value
    })
  }

  onSubmit = (event) =>{
    event.preventDefault();
    console.log(`Business name is ${this.state.businessName}`);
    console.log(`Contact name is ${this.state.contactName}`);
    console.log(`Phone number is ${this.state.Phone}`);
    console.log(`Email is ${this.state.Email}`);
    console.log(`Delivery address is ${this.state.deliveryAddress}`);
    console.log(`The keyed entry is ${this.state.keyedEntry}`);
    console.log(`The earliest arrival is ${this.state.earliestArrival}`);
    console.log(`The latest arrival is ${this.state.latestArrival}`);
    console.log(`The delivery contact name is ${this.state.deliveryContactName}`);
    console.log(`The delivery contact phone number is ${this.state.deliveryContactPhone}`);
    console.log(`The delivery note is ${this.state.deliveryNotes}`);

    this.setState({
        businessName:"",
        contactName:"",
        Phone:"",
        Email:"",
        deliveryAddress:"",
        keyedEntry:false,
        earliestArrival:"",
        latestArrival:"",
        deliveryContactName:"",
        deliveryContactPhone:"",
        deliveryNotes:""
    })
  }

    render(){
        return(
            <div>
          <div className="ui items">
            <div className="item">
              <div className="middle aligned content">
                <div className="ui left floated">
                  <NavLink to="/customers">Back</NavLink>
                  <h1>
                    <b>
                      <i />
                        Add a customer
                    </b>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Container>
          <div id="whiteBoard">
          <h2>Contact details</h2>
  <Row>
    <Col sm={6}>  <Form.Group controlId="businessName">
    <Form.Label>Business Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter business name" value={this.state.businessName} onChange={this.onBusinessName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="contactName">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact name" value={this.state.contactName} onChange={this.onContactName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="businessPhoneNumber">
    <Form.Label>Phone</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter phone number" value={this.state.Phone} onChange={this.onPhone} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control size="lg" type="email" placeholder="Enter email here" value={this.state.Email} onChange={this.onEmail} required />
  </Form.Group></Col>
  </Row>
  </div>
  <br>
  </br>
  <div id="whiteBoard">
          <h2>Delivery information</h2>
  <Row>
    <Col sm={8}>  <Form.Group controlId="deliveryAddress">
    <Form.Label>Delivery Address</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter delivery address" value={this.state.deliveryAddress} onChange={this.onDeliveryAddress} required />
  </Form.Group></Col>
  <Col sm={8}>  <Form.Group controlId="keyedEntry">
    <Form.Label>Keyed Entry</Form.Label>
    <Form.Check size="lg" type="checkbox" aria-label="checkbox" value={this.state.keyedEntry} onClick={this.onKeyedEntry} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="earliestArrival">
    <Form.Label>Earliest arrival</Form.Label>
    <Form.Control size="lg" type="time" placeholder="Example 12:00 AM" value={this.state.earliestArrival} onChange={this.onEarliestArrival} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="latestArrival">
    <Form.Label>Latest arrival</Form.Label>
    <Form.Control size="lg" type="time" placeholder="Example 4:40 AM" value={this.state.latestArrival} onChange={this.onLatestArrival} required />
  </Form.Group></Col>
  </Row>
  <h2>Delivery contact details</h2>
  <Row>
  <Col sm={6}>  <Form.Group controlId="phoneNumber">
    <Form.Label>Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact name" value={this.state.deliveryContactName} onChange={this.onDeliveryContactName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="contactPhoneName">
    <Form.Label>Phone</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact phone number" value={this.state.deliveryContactPhone} onChange={this.onDeliveryContactPhone} required />
  </Form.Group></Col>
  </Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Delivery notes</Form.Label>
    <Form.Control as="textarea" value={this.state.deliveryNotes} onChange={this.onDeliveryNotes} rows="4" />
  </Form.Group>
  <Button variant="primary" size="lg" block onClick={this.onSubmit}>
    Add client
  </Button>
  </div>
  </Container>
            </div>
        );
    }
}

export default AddCustomer;