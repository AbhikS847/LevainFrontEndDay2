import React from 'react';
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div>
              <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link><NavLink to="/" className="nav-link" activeClassName="nav-link" ><h1>Levain</h1></NavLink></Nav.Link>
  <Nav.Link><NavLink to="/today" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar outline"></i> Today</NavLink></Nav.Link>
  <Nav.Link><NavLink to="/production" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar"></i> Production</NavLink></Nav.Link>
  <div className="rule"></div>
  <Nav.Link><NavLink to="/customers" className="nav-link" activeClassName="nav-link active" ><i className="icon users"></i> Customers</NavLink></Nav.Link>
  <Nav.Link><NavLink to="/orders" className="nav-link" activeClassName="nav-link active" ><i className="icon folder open"></i> Orders</NavLink></Nav.Link>
  <Nav.Link><NavLink to="/products" className="nav-link" activeClassName="nav-link active" ><i className="icon align center"></i> Products</NavLink></Nav.Link>
</Nav>
            </div>
        )
    }
}

export default Navbar;