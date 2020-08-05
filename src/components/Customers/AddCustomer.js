import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container,InputGroup, FormControl, Button, Row,Form,Col} from 'react-bootstrap';

class AddCustomer extends React.Component{

  constructor(props){
    super(props);
    this.onBusinessName = this.onBusinessName.bind(this);
    this.onContactName = this.onContactName.bind(this);
    this.onPhone = this.onPhone.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onDeliveryAddress = this.onDeliveryAddress.bind(this);
    this.onKeyedEntry = this.onKeyedEntry.bind(this);
    this.onEarliestArrival = this.onKeyedEntry.bind(this);
    this.onLatestArrival = this.onLatestArrival.bind(this);
    this.onDeliveryContactName = this.onDeliveryContactName.bind(this);
    this.onDeliveryContactPhone = this.onDeliveryContactPhone.bind(this);
    this.onDeliveryNotes = this.onDeliveryNotes.bind(this);

    this.state = {
      contactDetails:{
        businessName:"",
        contactName:"",
        Phone:"",
        Email:""
      },
      deliveryInfo:{
        deliveryAddress:"",
        keyedEntry:false,
        earliestArrival:"",
        latestArrival:"",
      },
      deliveryContactDetails:{
        deliveryContactName:"",
        deliveryContactPhone:"",
        deliveryNotes:""
      }
    }
  }

  onBusinessName = (event) =>{
    this.setState({
      contactDetails:{
        businessName:event.target.value
      }
    })
  }
  onContactName = (event) =>{
    this.setState({
      contactDetails:{
        contactName:event.target.value
      }
    })
  }
  onPhone = (event) =>{
    this.setState({
      contactDetails:{
        Phone:event.target.value
      }
    })
  }
  onEmail = (event) =>{
    this.setState({
      contactDetails:{
        Email:event.target.value
      }
    })
  }

  onDeliveryAddress = (event) =>{
    this.setState({
      deliveryInfo:{
        deliveryAddress:event.target.value
      }
    })
  }

  onKeyedEntry = (event) =>{
    this.setState({
      deliveryInfo:{
        keyedEntry:event.target.value
      }
    })
  }

  onEarliestArrival = (event) =>{
    this.setState({
      deliveryInfo:{
        earliestArrival:event.target.value
      }
    })
  }

  onLatestArrival = (event) =>{
    this.setState({
      deliveryInfo:{
        latestArrival:event.target.value
      }
    })
  }

  onDeliveryContactName = (event) =>{
    this.setState({
      deliveryContactDetails:{
        deliveryContactName:event.target.value
      }
    })
  }

  onDeliveryContactPhone = (event) =>{
    this.setState({
      deliveryContactDetails:{
        deliveryContactPhone:event.target.value
      }
    })
  }

  onDeliveryNotes = (event) =>{
    this.setState({
      deliveryContactDetails:{
        deliveryNotes:event.target.value
      }
    })
  }

  onSubmit = (event) =>{
    event.preventDefault();
    console.log(`Business name is ${this.state.contactDetails.businessName}`);
    console.log(`Contact name is ${this.state.contactDetails.contactName}`);
    console.log(`Phone number is ${this.state.contactDetails.Phone}`);
    console.log(`Email is ${this.state.contactDetails.Email}`);
    console.log(`Delivery address is ${this.state.deliveryInfo.deliveryAddress}`);
    console.log(`The keyed entry is ${this.state.deliveryInfo.keyedEntry}`);
    console.log(`The earliest arrival is ${this.state.deliveryInfo.earliestArrival}`);
    console.log(`The latest arrival is ${this.state.deliveryInfo.latestArrival}`);
    console.log(`The delivery contact name is ${this.state.deliveryContactDetails.deliveryContactName}`);
    console.log(`The delivery contact phone number is ${this.state.deliveryContactDetails.deliveryContactPhone}`);
    console.log(`The delivery note is ${this.state.deliveryContactDetails.deliveryNotes}`);

    this.setState({
      contactDetails:{
        businessName:"",
        contactName:"",
        Phone:"",
        Email:""
      },
      deliveryInfo:{
        deliveryAddress:"",
        keyedEntry:false,
        earliestArrival:"",
        latestArrival:"",
      },
      deliveryContactDetails:{
        deliveryContactName:"",
        deliveryContactPhone:"",
        deliveryNotes:""
      }
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
          <div id="">
          <h2>Contact details</h2>
  <Row>
    <Col sm={6}>  <Form.Group controlId="businessName">
    <Form.Label>Business Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter business name" onChange={this.onBusinessName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="contactName">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact name" onChange={this.onContactName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="phoneNumber">
    <Form.Label>Phone</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter phone number" onChange={this.onPhone} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="contactName">
    <Form.Label>Email</Form.Label>
    <Form.Control size="lg" type="email" placeholder="Enter email here" onChange={this.onEmail} required />
  </Form.Group></Col>
  </Row>
  </div>
  <br>
  </br>
  <div id="">
          <h2>Delivery information</h2>
  <Row>
    <Col sm={8}>  <Form.Group controlId="deliveryAddress">
    <Form.Label>Delivery Address</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter delivery address" onChange={this.onDeliveryAddress} required />
  </Form.Group></Col>
  <Col sm={8}>  <Form.Group controlId="keyedEntry">
    <Form.Label>Keyed Entry</Form.Label>
    <Form.Check size="lg" type="radio" aria-label="radio 1" onChange={this.onKeyedEntry} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="earliestArrival">
    <Form.Label>Earliest arrival</Form.Label>
    <Form.Control size="lg" type="time" placeholder="Example 12:00 AM" onChange={this.onEarliestArrival} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="latestArrival">
    <Form.Label>Latest arrival</Form.Label>
    <Form.Control size="lg" type="time" placeholder="Example 4:40 AM" onChange={this.onLatestArrival} required />
  </Form.Group></Col>
  </Row>
  <h2>Delivery contact details</h2>
  <Row>
  <Col sm={6}>  <Form.Group controlId="phoneNumber">
    <Form.Label>Name</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact name" onChange={this.onDeliveryContactName} required />
  </Form.Group></Col>
  <Col sm={6}>  <Form.Group controlId="contactName">
    <Form.Label>Phone</Form.Label>
    <Form.Control size="lg" type="text" placeholder="Enter contact phone number" onChange={this.onDeliveryContactPhone} required />
  </Form.Group></Col>
  </Row>
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