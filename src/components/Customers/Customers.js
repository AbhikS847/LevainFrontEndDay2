import React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
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
<Table>
    <thead>
        <tr>
            <th>
            Basic info            
            </th>
            <th>
            Email          
            </th>
            <th>
            Phone            
            </th>
        </tr>
    </thead>
    <tbody>
    <tr>
    <td>
        <b><p>Business name</p></b>
        <p>Person name</p>
    </td>
    <td>
        <p>Email address</p>
    </td>
    <td>
        <p>Phone number</p>
    </td>
    </tr>
    </tbody>
</Table>
            </div>
        )
    }
}

export default Customers;