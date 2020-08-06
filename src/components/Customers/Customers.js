import React from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


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
        <Col>Basic info</Col>
        <Col>Email</Col>
        <Col>Phone</Col>
    </Row>
    <Row className="px-1 py-3" id="whiteBoard"> 
        <Col sm={4}>
            <b>Comapny Name</b>
            <p>Person</p>
        </Col>
        <Col sm={4}><p>Email</p></Col>
        <Col sm={4}><p>Phone</p></Col>
    </Row>

</Container>
            </div>
        )
    }
}

export default Customers;