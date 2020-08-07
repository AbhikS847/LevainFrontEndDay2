import React from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Customer = (props) =>{
    return (
        <Row className="px-1 py-3" id="whiteBoard"> 
        <Col xs={8} sm={4}>
            <b>{props.customer.businessName}</b>
            <p>{props.customer.contactName}</p>
        </Col>
        <Col xs={8} sm={4}><p>{props.customer.Email}</p></Col>
        <Col xs={8} sm={2}><p>{props.customer.Phone}</p></Col>
        <Col xs={8} sm={1}><NavLink to={`customer/edit/`+props.customer._id}><i className="icon edit"></i></NavLink></Col>
    </Row>
    )
}


class Customers extends React.Component{

    constructor(props){
        super(props);

        this.state={
            customers:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/customers/')
        .then((res)=>{
            this.setState({customers:res.data})
        })
        .catch((err)=>{console.log(err)})
    }

    CustomerDisplay(){
        return this.state.customers.map((currentCustomer,i)=>{
            return <Customer customer={currentCustomer} key={i} />
        })
    }

    render(){
        return(
            <div>
      <nav className="navbar justify-content-between">
  <NavLink to="/customers" className="nav-link" activeClassName="nav-link-active"><h1>Customers</h1></NavLink>
  <form className="form-inline">
    <NavLink to="/customer/search"><input class="form-control mr-sm-2 input-lg" type="search" placeholder="Search" aria-label="Search" /></NavLink>
    <NavLink to="/customer/add" className="nav-link mr-sm-2" activeClassName="nav-link-active"><h1><i className="icon plus small"></i></h1></NavLink>
  </form>
</nav>
<Container>
    <Row className="px-2 py-2 d-none d-sm-flex"> 
        <Col sm={4}>Basic info</Col>
        <Col sm={4}>Email</Col>
        <Col sm={2}>Phone</Col>
        <Col sm={1}></Col>
    </Row>
        {this.CustomerDisplay()}

</Container>
            </div>
        )
    }
}

export default Customers;